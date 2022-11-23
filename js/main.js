import './picture.js';
import './picture-editor.js';
import { createPhotoElement } from './picture.js';
import { setFormSubmit, closeFormEditing} from './form.js';
import { getData } from './api.js';

const picturesContainer = document.querySelector('.pictures');
const renderSimilarPictures = (similarPicture) => {
  const similarListFragment = document.createDocumentFragment();

  similarPicture.forEach((dataPic) => {
    similarListFragment.append(createPhotoElement(dataPic));
  });

  picturesContainer.append(similarListFragment);
};

getData((pictures) => {
  renderSimilarPictures(pictures);
});

setFormSubmit(closeFormEditing);
