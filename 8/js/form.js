import { isEscapeKey} from './util.js';
import {createSuccesMessage, createErrorMessage} from './message.js';

const imageFormEditing = document.querySelector('.img-upload__overlay');
const imageFormOpen = document.querySelector('.img-upload__input');
const imageFormClose = imageFormEditing.querySelector('.img-upload__cancel');
const modalOpen = document.querySelector('body');
const imageForm = document.querySelector('.img-upload__form');
const submitButton = imageForm.querySelector('.img-upload__submit');

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEditing();
  }
};

function openFormEditing() {
  imageFormEditing.classList.remove('hidden');
  modalOpen.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeFormEditing() {
  imageFormEditing.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  imageForm.reset();
  document.removeEventListener('keydown', onFormEscKeydown);
}

imageFormOpen.addEventListener('change', () => {
  openFormEditing();
});


imageFormClose.addEventListener('click', () => {
  closeFormEditing();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Секундочку...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'ОПУБЛИКОВАТЬ';
};


// Валидация Pristine
const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__discription--text',
});

const setFormSubmit = (onSuccess) => {
  imageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if(response.ok) {
            onSuccess();
            createSuccesMessage();
          }else {
            throw new Error(createErrorMessage);
          }
        })
        .catch((err) => {
          createErrorMessage(err);
        });
    }
  });
};

export { setFormSubmit, closeFormEditing };
