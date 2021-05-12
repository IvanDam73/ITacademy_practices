"use strict";

var input = document.querySelector('.input');
var btn1 = document.querySelector('.button1');
var btn2 = document.querySelector('.button2');
var btn3 = document.querySelector('.button3');
var btn4 = document.querySelector('.button4');
var btn5 = document.querySelector('.button5');
var myDiv = document.querySelector('.myDiv');
var newDiv = document.querySelector('.newDiv');
var myInput1 = document.querySelector('.myInput1');
var myInput2 = document.querySelector('.myInput2');
var myBtn = document.querySelector('.myBtn');
btn1.addEventListener('click', function but1() {
  input.value = input.value.toUpperCase();
}, true);
btn2.addEventListener('click', function () {
  input.value = input.value.toLowerCase();
});
btn3.addEventListener('click', function () {
  input.style.textDecoration = 'line-through';
});
btn4.addEventListener('click', function () {
  input.style.fontStyle = 'oblique';
});
btn5.addEventListener('click', function () {
  var info = document.querySelector('.myDiv').append(input.value);
});
myBtn.addEventListener('click', function () {
  for (var i = 0; i < input.value.length; i++) {
    myInput1.value[i] = input.value[i];
    myInput2.value[i] = input.value[i];
  }
});