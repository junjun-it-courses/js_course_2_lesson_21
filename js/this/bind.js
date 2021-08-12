// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве
// контекста выполнения this предоставленное значение.


let someObj = {
    firstName: 'Ihor',
    lastName: 'Cat'
}

function example(a, b) {
    console.log(this, a, b);
}


const exampleWithContext = example.bind(someObj, 'string1', 'string2');

// console.log(exampleWithContext, typeof(exampleWithContext))

exampleWithContext();
example();

console.log(exampleWithContext === example)