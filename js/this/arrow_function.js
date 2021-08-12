// В стрелочных функциях, this привязан к окружению, в котором была создана функция.
// В глобальной области видимости this будет указывать на глобальный объект.

// var globalObject = this;
// var foo = (() => this);
// console.log(foo() === globalObject); // true

// function example() {
//     // function body
// }
//
// let ex = () => {
//
// }


// Свойство this стрелочной функции нельзя переоределить, оно будет всегда указывать
// на то окружение в котором находится

// Вызов функции как метода объекта

// let obj = {
//     name: 'Vova',
//     example: () => {
//         // НЕ ссылается на текущий объект но хранит ссылку на window (global object)
//         console.log(this);
//     }
// }
//
// obj.example();

let obj2 = {
    name: 'Alex',
    lastName: 'Shaitan',
    age: 10,
    getFullName: function () {
        console.log(this.name + ' ' + this.lastName);
    },

    example: function () {
        // ссылается на текущий объект
        console.log(this);

        const ex = () => {
            console.log(this)
        }

        ex();

    }
}

obj2.example()
// obj2.getFullName()