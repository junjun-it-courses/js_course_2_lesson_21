// Метод apply() вызывает функцию с указанным значением this и аргументами,
// предоставленными в виде массива

let someObj = {
    firstName: 'Ihor',
    lastName: 'Cat'
}

let someArrayOfArguments = [200, 100];


function example(a, b) {
    console.log(this, a, b);
}

// example(100, 200);
example.apply(someObj, someArrayOfArguments)
// example.apply(someObj, ['str1', 'str2'])