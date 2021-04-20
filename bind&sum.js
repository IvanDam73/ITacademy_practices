// bind ---- bind ---- bind!!!
// const User = {
//     name : 'Вася',
//     phone : '375333757575',
// }

// function someOne(email) {
//     console.log(`моё имя ${this.name} и мой телефон ${this.phone} и почта ${email}`);
// }

// const someBind = someOne.bind(User)('vasya@Mail.com');


// function bind(fn, context, ...rest) {
//     return function(...args) {
//        return fn.call(context, ...rest.concat(args));
//     }
// }
// bind(someOne, User)('vasya@Mail.com');







// sum ---- sum ---- sum!!!

// function sum(num) {
//     let result = num;
//     function half(s){
//         result += s;
//         console.log(result);
//         return half;
//     }
//     console.log(result);
//     return half;
// }

// sum(1)(2)(3)(7)(15)






