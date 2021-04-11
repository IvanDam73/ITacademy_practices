// n1.
// const someStr = 'anna';
// function StringChanges() {
//     let someStr1 = someStr.split('').reverse().join('');
//     if (someStr!== someStr1) {
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// }
// StringChanges();




// n2.
// const fzbz = 10;
// function fizzBuzz() {
//     for(let i = 1; i <= fzbz; i++) {
//         if(i % 3 === 0 && i % 10 === 0) {
//             console.log('fizzbuzz');
//         }
//         else if(i % 3 === 0) {
//             console.log('fizz');
//         }
//         else if(i % 10 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

// n3 - не осилил сам. Нашел решение в гугле, но решил не слизывать

// n4 
// function fib(n) {
//     var a = 1, b = 1;
//     for (var i = 3; i <= n; i++) {
//         var temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return b;
// }
// var n = fib(7);
// console.log(n);

// n5 - не доделал
// class User {
//    constructor(name, surname) {
//        this.name = name;
//        this.surname = surname;
//        this.year = 2012;
//    }
// }
// let vasya = new User (Vasya, Petrov, 2012);


// class Student extends User{
//     constructor () {
//         super(...args);
//         this.thatyear = 2015;
//     }

//     getFullName(){
//         return this.name + '' + this.surname;
//     }

//     getCourse() {
//         return this.thatyear - this.year;
//     }
// }
