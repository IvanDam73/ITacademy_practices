// 1.
// let myLink = document.querySelectorAll('a');
// myLink.forEach((myLink) => {
//     myLink.addEventListener('mouseover', function(){
//         myLink.setAttribute('title', myLink.textContent);
//     });
// });
// 2.
// let myLink = document.querySelectorAll('a');
// // myLink.forEach((myLink) => {
// //     myLink.addEventListener('mouseover', function(){
// //         myLink.append(this.href);
// //     });
// // });
// 3. 
// let myLink = document.querySelectorAll('a');
// myLink.forEach((myLink) => {
//     myLink.addEventListener('mouseover', function(){
//         myLink.append(this.href);
//     },{once:true});
// });
// 4.
// let input = document.querySelectorAll('.newInput');
// input.forEach((input) => {
//     input.addEventListener('blur', function(){
//         let myP = document.querySelector('#test');
//         myP.textContent = input.value;
//     });
// });
// 5.  
// let input = document.querySelectorAll('.newInput');
// input.forEach((input) => {
//     input.addEventListener('click', function(){
//         alert(input.value);
//     },{once:true});
// });
// 6.
// let input = document.querySelectorAll('.newInput');
// input.forEach((input) => {
//     input.addEventListener('blur', function(){
//             if(input.value.length < 5){
//                 input.style.backgroundColor = 'green';
//             } else {
//                 input.style.backgroundColor = 'red';
//             }
//     });
// });
// 7.  Если тут должно быть условие на removeEventListener, то я не понял какое... 
//     Не знаю как разделить обработчики событий, чтобы они не срабатывали синхронно. Через setTimeout?
// let myDiv = document.querySelectorAll('.myDiv');
// function divClick(event){  
//     myDiv = event.target;
//     myDiv.style.backgroundColor = 'red';
// }
// myDiv.forEach((myDiv) => {
//     myDiv.addEventListener('click', divClick);
// });
// function divCancel(event){  
//     myDiv = event.target;
//     myDiv.style.backgroundColor = 'green'; 
// };
// myDiv.forEach((myDiv) => {
//     myDiv.addEventListener('click', divCancel);
// });
// 8.  Почуму Undefined??? 
// let myBtn = document.querySelector('.myNextBtn');
// let submit = document.querySelector('.submit');
// function newDiv(event) {
//     myBtn = event.target;
//     myBtn.insertAdjacentHTML('beforebegin', '<input type="text" class="ff" placeholder="text">');
// }
// myBtn.addEventListener('click', newDiv);
// submit.addEventListener('click', function(){
//     let aa = document.querySelectorAll('.ff');
//     aa.forEach(function(){
//         console.log(aa.value); 
//     });
// });
"use strict";