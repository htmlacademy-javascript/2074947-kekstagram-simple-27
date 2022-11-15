import './picture.js';
import { createPhotoArray } from './data.js';
import { createPhotoElement } from './picture.js';
import './form.js';

const picturesContainer = document.querySelector('.pictures');
const similarPictures = createPhotoArray();
const similarListFragment = document.createDocumentFragment();

similarPictures.forEach((dataPic) => {
  similarListFragment.append(createPhotoElement(dataPic));
});

picturesContainer.append(similarListFragment);
