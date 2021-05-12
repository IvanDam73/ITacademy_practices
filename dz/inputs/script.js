"use strict";

let input = document.querySelector('.input');
let btn1 = document.querySelector('.button1');
let btn2 = document.querySelector('.button2');
let btn3 = document.querySelector('.button3');
let btn4 = document.querySelector('.button4');
let btn5 = document.querySelector('.button5');
let myDiv = document.querySelector('.myDiv');
let newDiv = document.querySelector('.newDiv');
let myInput1 = document.querySelector('.myInput1');
let myInput2 = document.querySelector('.myInput2');
let myBtn = document.querySelector('.myBtn');



btn1.addEventListener('click', function but1(){
    input.value = input.value.toUpperCase();
    
}, true);

btn2.addEventListener('click', function(){
    input.value = input.value.toLowerCase();
});

btn3.addEventListener('click', function (){
    input.style.textDecoration = ('line-through');
});

btn4.addEventListener('click', function(){
    input.style.fontStyle = ('oblique');
});

btn5.addEventListener('click', function(){
    let info = document.querySelector('.myDiv').append(input.value);

});

myBtn.addEventListener('click', function(){
    for(let i = 0; i < input.value.length; i++){
        myInput1.value[i] = input.value[i];
        myInput2.value[i] = input.value[i];
        
    }
})



