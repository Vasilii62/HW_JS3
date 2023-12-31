"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(a, b) {
    return  a + b;
}

function diff(a, b) {
    if (a > b) {
        return a - b;
    } else if (a === b) {
        return 0;
    } else {
        return b - a;
    }
}

function mult(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    } else {
        return a * b;
    }
}

function div(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    } else if (a >= b) {
        return a / b;
    } else {
        return b / a;
    }
}

console.log(sum(2, 6));
console.log(diff(2, 6));
console.log(mult(2, 6));
console.log(div(2, 6));