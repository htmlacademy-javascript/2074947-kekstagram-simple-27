// Функция для проверки максимальной длины строки.

function checkLength(checkString , maxLength) {
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

// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.
let indexID = 0;

const createId = function () {
  indexID++;
  return indexID;
};

const createData = () => ({
  id: createId(),
  url: `photos/${indexID}.jpg`,
  description: `Описание фотографии ${indexID}`,
  likes: getRandomIntInclusive(15, 200),
  comments:  getRandomIntInclusive(0, 200)
});

const objectArray = Array.from({length: 25}, createData);
