import {isEscapeKey} from './util.js';

const imageFormEditing = document.querySelector('.img-upload__overlay');
const imageFormOpen = document.querySelector('.img-upload__input');
const imageFormClose = imageFormEditing.querySelector('.img-upload__cancel');
const modalOpen = document.querySelector('body');
const imageForm = document.querySelector('.img-upload__form');

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEditing();
  }
};

function openFormEditing () {
  imageFormEditing.classList.remove('hidden');
  modalOpen.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeFormEditing () {
  imageFormEditing.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  imageForm.reset();
  document.removeEventListener('keydown', onFormEscKeydown);
}

imageFormOpen.addEventListener('click', () => {
  openFormEditing();
});


imageFormClose.addEventListener('click', () => {
  closeFormEditing();
});
