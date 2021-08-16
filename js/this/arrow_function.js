// В стрелочных функциях, this привязан к окружению, в котором была создана функция.
// В глобальной области видимости this будет указывать на глобальный объект.

// var globalObject = this;
// var foo = (() => this);
// console.log(foo() === globalObject); // true

// function example() {
//     // function body
//     console.log(this)
// }
//
// console.log(this);
//
// let ex = () => {
//     console.log(this)
// }
//
// example();
// ex();


// Свойство this стрелочной функции нельзя переоределить, оно будет всегда указывать
// на то окружение в котором находится

// Вызов функции как метода объекта
//
// let obj = {
//     name: 'Vova',
//     example: () => {
//         // НЕ ссылается на текущий объект но хранит ссылку на window (global object)
//         console.log(this);
//     },
//     ex: function () {
//         console.log(this)
//     }
// }
//
// obj.example();
// obj.ex();

// let obj2 = {
//     name: 'Alex',
//     lastName: 'Shaitan',
//     age: 10,
//     getFullName: function () {
//         console.log(this.name + ' ' + this.lastName);
//     },
//
//     example: function () {
//         // ссылается на текущий объект
//         console.log(this);
//
//         const ex = () => {
//             console.log(this) // parent this
//         }
//
//         function ex2() {
//             'use strict'
//             console.log(this) // undefined || @indow
//         }
//
//         ex();
//         ex2();
//
//     }
// }
//
// obj2.example()
// obj2.getFullName()


let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.map((item) => {
//     return item ** 2
// });

// console.log(arr2);

// let arr3 = arr.map(item => {
//     return item ** 2
// });
//
// console.log(arr3);


// let arr4 = arr.map(item => item ** 2);
// console.log(arr4);

// let arr5 = arr.map(item => item % 2 === 0 ? item ** 2 : null);
// console.log(arr5);

// arr.forEach((item, index, argArr) => {
//     let name = 10;
//
//     argArr[index] = item ** 2;
//
//     if(100 + 1) {
//         console.log(102)
//     }
//
//     return 100;
// })
//
// console.log(arr)


