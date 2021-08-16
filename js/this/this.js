'use strict'
// Global context
// В глобальном контексте выполнения (за пределами каких-либо функций) this
// ссылается на глобальный объект
// console.log(this)


// В браузерах, объект window также является объектом global:

// console.log(this)
// console.log(window)
// console.log(this === window); // true

// let a = {name: 'Vova'}
// let b = {name: 'Vova'}
//
// console.log(a === b);

// a = 37;                 // тут var под капотом
// console.log(window.a);  // 37
// console.log(this.a);    // 37

// this.b = "string";
// console.log(window.b)
// console.log(b)              // тут var под капотом

// Function Context

// Нестрогий режим
// В пределах функции значение this зависит от того, каким
// образом вызвана функция.

// function f1() {
//     return this;
// }
//
// // В браузере:
// console.log(f1());          // window - глобальный объект в браузере
// console.log(window.f1())
// console.log(this.f1())


// Строгий режим
// function f2(){
//     "use strict"; // см. strict mode
//     return this;
// }
//
// console.log(f2()); // true


let obj = {
    name: 'Vova',
    getName: function () {
        console.log(this);

        function example () {
            console.log(this);
        }
        example();
    },

    example: function () {
        this.getName();
    }
}

// console.log(obj)

obj.example();
// console.log(window.example)