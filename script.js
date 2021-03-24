// n1
// document.onclick = function(e) {
//     const t = e.target;
//     if (t.tagName === 'BUTTON') {
//       t.innerHTML = (t.innerHTML | 0) + 1;
//     }
//   };


// var colors = ['blue', 'yellow', 'green', 'red'];
// var output;
// function colorClicks (output) {
//     for (i=0; i<colors.length; i++);
//     output = i + colors[i];
// }





// n3
//   function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex ;
  
//     while (0 !== currentIndex) {
  
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
//   }

// var arr = [];
// for (var i = 0; i < 100; i++)
//   arr.push(i);
// shuffle(arr);
// console.log(arr);

// n4
// const array1 = [2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));

// n5
// const array1 = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));

// n6
// const array1 = [10, 20, 30, 50, 235, 3000];
// alert (array1[0]); 
// alert (array1[1]);
// alert (array1[3]);
// alert (array1[4]);

// n7
// var array1 = [4, 2, 5, 19, 13, 0, 10];
// let result = array1.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// console.log(array1.map((x) => Math.sqrt(Math.pow(x, 3) + result)));

// n8
// var a = 10;
// var b = 3;
// var resultAB = a % b;
// console.log(resultAB);

// n9
// var a = Math.floor(Math.random() * 1001); 
// var b = 2;
// var c = prompt("Давай число!");
// var d = a / b;

// if (d && a % b === 0) {
//   alert('Делится ' + (d));
// } else {
//   alert('Делится с остатком ' + (a % b));
// }



  
