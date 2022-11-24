import { isEscapeKey } from './util.js';

const pageContainer = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const openMessage = (container, messageElement) => {
  container.append(messageElement);
  document.addEventListener('keydown', onMessageEscKeydown);
};

const closeMessage = (messageElement) => {
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
};

function onMessageEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const activeMessage = document.querySelector('.message-popup');
    if(activeMessage) {
      closeMessage(activeMessage);
    }
  }
}

const createSuccesMessage = () => {
  const succesMessageElement = successMessageTemplate.cloneNode(true);
  openMessage(pageContainer, succesMessageElement);

  succesMessageElement.addEventListener('click', () => {
    closeMessage(succesMessageElement);
  });
};

const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const createErrorMessage = (err) => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorMessageElementTitle = errorMessageElement.querySelector('.error__title');
  errorMessageElementTitle.textContent = err?.message || 'Ошибка загрузки файла';
  openMessage(pageContainer, errorMessageElement);
  errorMessageElement.addEventListener('click', () => {
    closeMessage(errorMessageElement);
  });
};


export { createSuccesMessage, createErrorMessage};
