"use strict";
/*
1. Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
Регистр букв не имеет значения. 
checkAnagram('рига', 'игра') // true
checkAnagram('aab', 'abb') // false
*/

const checkAnagram = (string1, string2) =>
  string1.split("").sort().join("") === string2.split("").sort().join("");

console.log(checkAnagram("рига", "игра"));
console.log(checkAnagram("aab", "abb"));

/*
2. Написать функцию, которая подсчитывает количество гласных в строке.
*/

const stringVowels = (string) => {
  let countVowels = 0;
  const vowelsUkr = ["а", "о", "у", "е", "и", "і"];
  const vowelsEng = ["a", "e", "i", "o", "u", "y"];
  for (const letter of string.toLowerCase()) {
    if ((vowelsUkr + vowelsEng).includes(letter)) {
      countVowels++;
    }
  }
  return countVowels;
};

console.log(stringVowels("голосні vowels"));

/*
3. Написать функцию, которая принимает массив с числами и возвращает новый массив, 
который содержит отрицательные числа из первого массива.
*/

const negativeNumbers = (array) => {
  let minusValues = [];
  array.forEach(function (item) {
    if (item < 0) {
      minusValues.push(item);
    }
  });
  return minusValues;
};

const arr1 = [-1, 2, 3, -4, 5, 6, -7];
console.log(negativeNumbers(arr1));

/*
4. Написать функцию, которая принимает массив и возвращает новый массив, 
состоящий только из уникальных значений первого массива (значения не должны повторяться).
*/

const uniqueValues = (array) => {
  let uniqueResult = [];

  for (let str of array) {
    if (!uniqueResult.includes(str)) {
      uniqueResult.push(str);
    }
  }

  return uniqueResult;
};

const arr2 = ["test", 1, 5, "text", 5, -4, 7, "test", 7, "text"];
console.log(uniqueValues(arr2));
