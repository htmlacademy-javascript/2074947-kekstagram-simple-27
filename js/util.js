// Функция для проверки максимальной длины строки.

function checkLength(checkString, maxLength) {
  return checkString.length < maxLength;
}
checkLength(1, 19);
checkLength(2, 7);

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1, 100);

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, isEscapeKey};
