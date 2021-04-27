//Задача.2 Фильтрация массива чисел
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach((callback) => {
    if (callback > value) {
      filteredNumbers.push(callback);
    }
  });
  console.log(filteredNumbers);
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3); //возвращает [4, 5].
filterArray([1, 2, 3, 4, 5], 4); //возвращает [5].

// Задача. Общие элементы
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины
// в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach((callback) => {
    if (secondArray.includes(callback)) {
      commonElements.push(callback);
    }
  });
  console.log(commonElements);
  return commonElements;
}
getCommonElements([1, 2, 3], [2, 4]); // возвращает [2].
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2].

//Задача.18  Пользователи с цветом глаз
// Дополни функцию getUsersWithEyeColor(users, color) так,
// чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const color = "green";
const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);
console.log(users.filter((user) => user.eyeColor === color)); // вернет Ross Vazquez и Elma Head.
