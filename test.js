"use strict"

// // Задание: Магазин электроники

// Создай переменную shopName и помести в неё название магазина на твой выбор.

// Создай объект shopInfo и напрямую внутри него опиши следующее:

// Свойство address — строка с любым адресом
// Свойство staff — массив из 4 сотрудников (имена на твой выбор)
// Свойство inventory — объект с 3 товарами и их ценами в формате товар: цена
// Свойство isOpen — магазин сейчас закрыт
// Свойство rating — число от 1 до 5

// Выведи в консоль shopName и shopInfo.

// Затем — без изменения самого объекта выше — на следующих строках:

// Измени рейтинг на 4.5
// Добавь в массив сотрудников ещё одного — shopInfo.staff.push('Kate')
// Выведи обновлённый объект в консоль

let shopName = 'Blackpink';

const shopInfo = {
    address: 'Seoul, kimchi str. 34',
    staff: [
        'Lisa',
        'Jennie',
        'Rose',
        'Jiso'
    ],
    inventory: {
        dance: 100,
        songs: 200,
        video: 300,
    },
    isOpen : false,
    rating : 5

};

console.log(shopName);
console.log(shopInfo);

shopInfo.rating = 4.5;
shopInfo.staff.push = ('Belucci');


console.log(shopName);
console.log(shopInfo);