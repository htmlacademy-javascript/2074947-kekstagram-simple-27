const uploadFormElement = document.querySelector('#upload-select-image');
const scaleSmallerButton = uploadFormElement.querySelector('.scale__control--smaller');
const sclaeBiggerButton = uploadFormElement.querySelector('.scale__control--bigger');
const scaleValueButton = uploadFormElement.querySelector('.scale__control--value');
const imagePreviewContainer = uploadFormElement.querySelector('.img-upload__preview');
const imagePreviewElement = uploadFormElement.querySelector('.img-upload__preview img');
const effectRangeValue = uploadFormElement.querySelector('.effect-level__value');
const effectSlider = uploadFormElement.querySelector('.effect-level__slider');
const effectsList = uploadFormElement.querySelector('.effects__list');
let slider;

function setScale(scale) {
  if (scale > 100) {scale = 100;}
  if (scale < 25) {scale = 25;}
  scaleValueButton.value = `${scale}%`;
  imagePreviewContainer.style.transform = `scale(${scale / 100})`;
}

scaleSmallerButton.addEventListener('click', () => {
  setScale(parseInt(scaleValueButton.value) - 25);
});

sclaeBiggerButton.addEventListener('click', () => {
  setScale(parseInt(scaleValueButton.value) + 25);
});

function setEffect() {
  const effect = uploadFormElement.querySelector('.effects__radio:checked').value;
  const value = effectRangeValue.value;
  let filter = 'none';
  switch (effect) {
    case 'chrome':
      filter = `grayscale(${value / 100})`;
      break;
    case 'sepia':
      filter = `sepia(${value / 100})`;
      break;
    case 'marvin':
      filter = `invert(${value}%)`;
      break;
    case 'phobos':
      filter = `blur(${value / 100 * 3}px)`;
      break;
    case 'heat':
      filter = `brightness(${value / 100 * 2 + 1})`;
      break;

    default:
      break;
  }

  imagePreviewElement.style.filter = filter;
}

function intialSlider() {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 0.1,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', () => {
    effectRangeValue.value = effectSlider.noUiSlider.get();
    setEffect();
  });

  return effectSlider;
}
function onChangeEffect (evt) {
  if (!slider) {slider = intialSlider();}
  if(evt.target.value === 'marvin'){
    slider.noUiSlider.updateOptions({
      step: 1
    });
  } else {
    slider.noUiSlider.updateOptions({
      step: 0.1
    });
  }
  slider.noUiSlider.set(100);
  if(evt.target.value === 'none') {
    slider.noUiSlider.destroy();
    slider = null;
  }

  setEffect();
}

effectsList.addEventListener('change', onChangeEffect);
