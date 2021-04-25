//Задача.2 Фильтрация массива чисел
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.


function filterArray(numbers, value) {
  const filteredNumbers = [];
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //       filteredNumbers.push(numbers[i]);
  //     }
  //   }

  numbers.forEach(callback =>{
    if(callback > value){
    filteredNumbers.push(callback);
    }
 });
  console.log(filteredNumbers);
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3); //возвращает [4, 5].
filterArray([1, 2, 3, 4, 5], 4); //возвращает [5].
filterArray([1, 2, 3, 4, 5], 5); //возвращает [].
filterArray([12, 24, 8, 41, 76], 38); //возвращает [41, 76].
filterArray([12, 24, 8, 41, 76], 20); //возвращает [24, 41, 76].
