//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(1, 100);

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, isEscapeKey};
