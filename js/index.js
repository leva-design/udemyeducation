"use strict";

// let number = 4.6 //Number

// console.log(4/0); //Infinity

// console.log(-4/0); // -Infinity

// console.log('string' * 9); //NaN - not a number

// const person = 'Alex'; // String

// const bool = true or false; //Boolean

// console.log(something) //Null Это когда чего то просто нету

// let und;
// console.log(und); //Undefined Это когда что то есть, но это значение пустое


// Объекты 

// Объекты - это коллекция данных, структура которая используется для хранения абсолютно любых данных
// Такой тип данных не зря называется комплексным, ведь в нем могут содержаться все типы данных


// const obj = {
    //Свойство(ключ):  Значение
//        name: 'John',
//        age: 25,
//        isMarried: false     
// }


//console.log(obj.name); //John

// console.log(obj[name]); //Error 

// console.log(obj['name']);


// ARRAY, массив является частным случаем объекта 
                // 0          1         2       3        4 //Ключи уже заданы заранее в Массиве
// let arr = ['plum.png', 'orange.jpg', 7, 'apple.bmp', {}]; 

// console.log(arr[1]); //Orange.jpg



// const array = [1, 2, 3];
// const arrObj = {

//     0: 1, 
//     1: 2,
//     2: 3
// };

// console.log(array[1]); // 

// const Obj = {
//     'Anna': 500,
//     'Alice': 800
// };


// const result = confirm('');

// alert('hello world');

// console.log('arr' + ' - object');




// let incr = 10;
// let decr = 10;

// ++incr;
// --decr;

// console.log(++incr); // 10 если мы поставим в постфиксную форму то консоль выдаст 10, потому что она сначала возвращает значение а потом увеличивает или уменьшает
// console.log(--decr); // 


// lesson 19, practise

const numberOfFilms = confirm('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
    } else {
            console.log('error');
            i--;
    }
}


if (personalMovieDB.count < 10) {
    console.log('Вы просмотрели мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}


console.log(personalMovieDB);


// Условия 

// if (4 == 4) {
//     console.log('ok');
// } else {
//     console.log('Error');
// }


// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('ok');
// }


// (num === 50) ? console.log('ok') : console.log('Error');

// !!!!

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Too much');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         console.log('try again later');
//     break;
// }

// Доп урок к условиям

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('I am ok');
// } 

// console.log((hamburger && fries));


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'nfsjbshbsibw');



// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('I am ok');
// } else {
//     console.log('we are coming back');
// }

// console.log((hamburger && fries));

// Оператор && всегда возвращает первое ложное знаечение если оно есть на нем он запинается и код дальше уде не идет
// Если все аргументы верны то возвращается знаечение последнего аргумента
// В литре также можно встретить выражение И запинается на лжи, ИЛИ запинается на правде


// Оператор ИЛИ
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {    // как только оператор ИЛИ находит правду он перестает работать
    // console.log('I am ok');          // Если вообще все не правда, то возвращается последнее ложное значение
// } else {
//     console.log('we are coming back');
// }

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// Циклы    

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }



// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);


// for (let i = 1; i < 10; i++) { // здесь в первом аргументе переменная, во втором значение при котором цикл остановится, в третьем условие что будет происходить с аргументом
//    if (i === 6) {
    //    break; // 12345
    // continue; // 123456789 этот оператор позволяет пропустить шаг кототрый нам не нужен при этом не прирывая полностью цикл
//    }
//     console.log(i);
// } 
 

// Доп урок циклы в циклах

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// метка 
// first: for (let i = 1; i < length; i++) {
//     console.log('first level: ${i}');
//     for (let j = 0; j < i; j++) {
//         console.log('second level: ${j}');
//         for (let k = 0; k < i; k++) {
//             if (k === 2) continue first;
//             console.log('third level: ${k}');
//         }
//     }
// }


    // function firstTask() {
    //     for (let i = 5; i < 11; i++) {
    //         console.log(i);
    //     }
    // }













