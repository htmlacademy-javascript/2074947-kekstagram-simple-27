const pageContainer = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

function createSuccesMessage() {
  const succesMessageElement = successMessageTemplate.cloneNode(true);
  pageContainer.append(succesMessageElement);

  succesMessageElement.addEventListener('click', () => {
    pageContainer.removeChild(succesMessageElement);
  });
}

const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

function createErrorMessage() {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  pageContainer.append(errorMessageElement);

  errorMessageElement.addEventListener('click', () => {
    pageContainer.removeChild(errorMessageElement);
  });
}


export { createSuccesMessage, createErrorMessage};
