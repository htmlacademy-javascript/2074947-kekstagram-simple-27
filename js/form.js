import { isEscapeKey} from './util.js';
import {createSuccesMessage, createErrorMessage} from './message.js';
import { makeRequest } from './api.js';

const imageFormEditing = document.querySelector('.img-upload__overlay');
const imageFormOpen = document.querySelector('.img-upload__input');
const imageFormClose = imageFormEditing.querySelector('.img-upload__cancel');
const modalOpen = document.querySelector('body');
const imageForm = document.querySelector('.img-upload__form');


const openFormEditing = () => {
  imageFormEditing.classList.remove('hidden');
  modalOpen.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscKeydown);
};

const closeFormEditing = () => {
  imageFormEditing.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  imageForm.reset();
  document.removeEventListener('keydown', onFormEscKeydown);
};

function onFormEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEditing();
  }
}

imageFormOpen.addEventListener('change', () => {
  openFormEditing();
});


imageFormClose.addEventListener('click', () => {
  closeFormEditing();
});

// Валидация Pristine
const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__discription--text',
});

const setFormSubmit = (onSuccess) => {
  imageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const onSuccessCb = () => {
      onSuccess();
      createSuccesMessage();
    };

    const onFailCb = (err) => {
      createErrorMessage(err);
    };

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      makeRequest({onSuccess: onSuccessCb, onFail: onFailCb, method: 'POST', body: formData});
    }
  });
};

export { setFormSubmit, closeFormEditing };
