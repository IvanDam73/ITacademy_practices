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

// n3
// function anagram (a, b) {
//     if (a === b) return true;
//     if(a.length !== b.length) return false;

//     let solution = {};

//     for(let words of a)
//     solution[words] = (solution[words] || 0) + 1;

//     for(let words of b) {
//     if(!solution[words]) return false;
//     }
//     return true;
// }
// anagram();

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

// n5
// class User {
//    constructor(Vasya, Petrov, year) {
//        this.name = Vasya;
//        this.surname = Petrov;
//        this.year = 2012;
//    }
// }

// class Student {
//     getFullName(){
//         Student.call( this.name + '' + this.surname);
//     }

//     getCourse() {
//         let thatyear = 2017;
//         Student.call(thatyear - this.year);
//     }
    
// }

// const User1 = new User ();
