"use strict"

const firstName = prompt('Какое Ваше имя?', 'Иван');
const secondName = prompt('Какая у Вас фамилия?', 'Иванов');
const dadName = prompt('Какое Ваше отчество?', 'Иванович');
const age = prompt('Сколько Вам лет?', 10);
const days = (age/4)+(age*365);
const futureAges = (Number(age) + 5);
const gender = confirm('Ваш пол мужской?');

const result = [`Ваше Ф.И.О. : ${secondName} ${firstName} ${dadName}
Ваш возраст : ${age}
Ваш возраст в днях : ${days}
Через 5 лет Вам будет : ${futureAges}
Ваш пол : ${yourGender(gender)} 
Вы на пенсии : ${old(age, gender)}`];

const a = alert(`${result}`);

function yourGender(){
    if(gender==true){
        return 'мужской';
        } else {
            return 'женский';
        }
}

function old() {
    if(age<62 && gender==true){
        return 'нет';
    } else if(age<57 && gender==false){
        return 'нет';
    } else {
        return 'да';
    }
}





