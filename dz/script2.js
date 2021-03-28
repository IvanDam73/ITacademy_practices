//n1. 
// var a = [2, 3, 5];
// var b = [2, 3, 5];
// var c = [2, 2, 3, 3, 5, 6];
// var d = [1, 2, 3];
// var intersection = a.filter(x => b.includes(x));
// var intersection1 = a.filter(x => c.includes(x));
// var intersection2 = a.filter(x => d.includes(x));

// console.log(intersection);
// console.log(intersection1);
// console.log(intersection2);



// n2.
// var myArray1 = [55, 77, 66];
// var myArray2 = [55, 11, 15, 77, 66, 99, 100, 110];
// var dubbleNum = {};
// myArray1.forEach (function(myArr1) {
//     for (var i =0; i  < myArray2.length; i++);
//     console.log(myArr1);
//     if(myArray1[i] === myArray2[i]) {
//         dubbleNum[myArray1] = true;
//         return dubbleNum;
//     } 
// });
// console.log(dubbleNum);



// n3.
// var someString = "string";
// v1
// var next = someString.replace ('string', 'String');
// console.log(next);
// v2
// var b = someString.substr(0, 1).toUpperCase()+'tring';
// console.log(b);



// n4.
// const str = '123456'

// function reverseString(str) {
//  return str.split('').reverse().join('')
// }
// console.log('str:', str);
// console.log('reverse:', reverseString(str));



// n5.
// var someNum = 587;
// var result = Math.sqrt(someNum);
// console.log(Math.ceil(result));
// console.log(Math.floor(result));
// console.log(result);



// n6.
// var x = 4, x1 = -2, x2 = 5, x3 = 19, x4 = -130, x5 = 0, x6 = 10;
// var minimal = Math.min (x, x1, x2, x3, x4, x5, x6);
// console.log(minimal);
// var maximal = Math.max (x, x1, x2, x3, x4, x5, x6);
// console.log(maximal);



// n7.
// var myArray5 = [23, 52, 1, 75, 89, 3];
// var mapped = myArray5.map(x => Math.pow(x, 2));
// mapped.sort((a, b) => b - a);
// console.log(mapped);
// var finalaccum = myArray5.reduce(function(sum, current) {
//     return sum + current;
//   }, 0); 
// console.log(finalaccum);
// var result = myArray5.filter(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);



// n8.
// var itObj = {js:['jQuery', 'Angular'], php:'hello', css: 'world'};
// console.log(itObj.js[0]);



// n9.
// var massMass = [
//   {ru:['понедельник', 'вторник', 'среда', 'четверг', 'пятница']},
//   {en:['monday', 'tuesday', 'wednesday', 'thursday', 'friday']}
// ];
// console.log(massMass[0].ru[0]);
// console.log(massMass[1].en[2]);