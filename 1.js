"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

//Вариант 1:

function cube(num) {
    return num ** 3;
}

console.log(cube(5));

//Вариант 2:

let squaring = num => Math.pow(num, 3);
console.log(squaring(4));