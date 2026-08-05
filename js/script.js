//* Урок 1 Переменные и строгий режим
// ----------------------------------------------------//

"use strict"
//! "use strict", 'use strict'; Включение строгого режима, в терминале ошибка не
//! отображается, её видно в браузере. Use strict должен быть в 
//! самом начале файла для перед остальным кодом.

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//     var result = 50;
// }
// console.log(result);

// alert(5)
// [].push('a');
//! Сборщик мусора в фоновом режиме постоянно сканирует код и задает один вопрос: «Можно ли до этого объекта сейчас как-то добраться из кода?».В случае с конструкцией [].push('a'); у массива нет переменной-ссылки. К нему невозможно обратиться со следующей строчки кода. Сборщик мусора мгновенно понимает: «Этот массив больше никто и никогда не сможет использовать» — и тут же удаляет его из памяти, освобождая место.

//? let result = prompt("Вееди любое число");
//? console.log(result);
//? console.log(typeof result);
//? В браузере число 1 будет воспроизведён как строка.

//? let isReady = confirm("Ты готов продолжать?")
//? console.log(isReady); - булевые значения.

//! console.log('10' / 2); - из операторов склеивает строки только плюс,
//! остальное работает как мат данные
//? console.log('Привет' / 2); NaN - Not a number//



//* Урок 2: Правила и типы названия переменных //
// --------------------------------------------------------
// const vehicleBodyWidth = 5000; 
// const vehicleBodyLength = 4000;

// const vehicleBodyWidth = 5000, vehicleBodyLength = 4000; // плохой пример кода.

// const vehicleBodyWidth = 5000,
//     vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длинна: ' + vehicleBodyLength);

//! Варианты названия папок и файлов, но не переменных
//* snake_case
//* UPPER_SNAKE_CASE
//* Kebab-case
//* PascalCase - названия классов

let COLOR_RED = '#F000'; //! Так можно назвать переменную, которая не будет изменяться, к примеру цвет.

const _apiBase = 'https://link.../';
const _apiKey = 'apikey=sflkdsjflksdjfl'; //! Такие переменные тоже не стоит трогать если они созданы.

//* Урок 3: Класификация типов данных в JS //
// ----------------------------------------------

// let number = 4.6;

//? console.log(-4/0);  -infinity, без "-" будет - infinity.
//? console.log('string' * 9); - NaN

const person = "Alex";

const bool = false; //! булевые значения - Да или Нет

// console.log(something); //!script.js:83 Uncaught ReferenceError: something is not defined at script.js:83:13

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj["name"]);

// //             0            1             2       3   4   5     6
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, [], "Alex"];
// console.log(arr[6]);

//* Урок 4 (д) - Разница между обьектами и массивами и неочевидные синтаксические возможности.
//! Если в свойстве обьекта текст, к нему можно обратиться напрямую, если цифры (никто их так не называет как правило), нужно обращаться через arrObj[1] с ключём. Использование квадратных скобок всегда надёжнее//

// const arr = ['a', 'b', 'c'];

// arr[10] = '3456'; //! Так делать не рекомендуется так как мы получим ([ 'a', 'b', 'c', <7 empty items>, '3456' ]) пустые ячейки посреди массива.
// console.log(arr[10]);
// -----------------------------------------------------------------
// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// };

// const b = 'b'; //? Если у нас есть переменная содержащая значение, мы можем изменить её значение для создания нового свойства. Где вместо переменной мы сразу меняем значение (arrObj[b] = '1234';). Создавая динамические с-ства в обьекте, мы в значение так же можем помещать какие-то другие обьекты - arrObj[b] = {обьект} или [массив].

// arrObj.b = '1234'; //? обращение к несуществующему свойству.

// console.log(arrObj[b]); //? Тут мы получим ошибку так как на момент создания обьекта такого свойства нету.

// arrObj[b] = '1234'; //? Так тоже можно вложить свойство в обьект.

// console.log(arrObj['b']); //? Для срабатывания мы должны в скобки поместить строку для обращения к какому-то свойству, а не переменной!

// console.log(arrObj.b); //? Тут JS сразу понимает что мы обращаемся к свойству.
// ---------------------------------------------------------------
// const obj = {a:1, b:2};

// const obj = {
//     Anna: 500,
//     'Alice': 800
// };

// -----------------------------------------------------------------
//*   push - метод массива, staff - массив внутри обьекта
//! shopInfo."staff".push('Belucci'); // ✅ добавляем в массив "staff"
// -----------------------------------------------------------------

//* Урок 5 - Простое общение с пользователями

// alert('Hello, world!');

// const result = confirm('Are you here?');
// console.log(result);
//? + перед командой prompt включает динамическую типизацию, иначе всё будет строкой по умолчанию
// const answer = +prompt("Вам есть 18?", "");
// console.log(typeof(answer));

// const answer = prompt("Вам есть 18?", "");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

//* Урок 6 - Интерполяция

// const category = 'toys';
// console.log('https://someurl.com/' + category + '/' + '4'); - без интерполяции
// console.log(`https://someurl.com/${category}/5`); - с интерполяцией

// const user = 'Dima';
// alert(`Привет, ${answers}`);

//* Урок 7 - Операторы в JS

// console.log('arr' + " - object");
// console.log(4 + +"5");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++, decr--);

// console.log(5%2);

// && - и (когда 2 true, к примеру)
// || - или (когда одно или другое true)

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);