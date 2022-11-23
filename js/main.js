import './picture.js';
import './picture-editor.js';
import { createPhotoElement } from './picture.js';
import { setFormSubmit, closeFormEditing} from './form.js';
import { makeRequest } from './api.js';
import { createErrorMessage } from './message.js';

const picturesContainer = document.querySelector('.pictures');
const renderSimilarPictures = (similarPicture) => {
  const similarListFragment = document.createDocumentFragment();

  similarPicture.forEach((dataPic) => {
    similarListFragment.append(createPhotoElement(dataPic));
  });

  picturesContainer.append(similarListFragment);
};

const onSuccessData = (pictures) => {
  renderSimilarPictures(pictures);
};

const onFailData = (err) => {
  createErrorMessage(err);
};

makeRequest({endpoint:'data', onSuccess:onSuccessData, onFail: onFailData});

setFormSubmit(closeFormEditing);
