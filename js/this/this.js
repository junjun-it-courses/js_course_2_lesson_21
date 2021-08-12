// Global context
// В глобальном контексте выполнения (за пределами каких-либо функций) this
// ссылается на глобальный объект

// В браузерах, объект window также является объектом global:

// console.log(this)
// console.log(window)
// console.log(this === window); // true

// a = 37;
// console.log(window.a); // 37
// console.log(this.a); // 37

// this.b = "string";
// console.log(window.b)
// console.log(b)

// Function Context

// Нестрогий режим
// В пределах функции значение this зависит от того, каким
// образом вызвана функция.

// function f1() {
//     return this;
// }
//
// // В браузере:
// console.log(f1()); // window - глобальный объект в браузере
// console.log(window.f1())
// console.log(this.f1())


// Строгий режим
// function f2(){
//     "use strict"; // см. strict mode
//     return this;
// }
//
// console.log(f2()); // true

