"use strict";

var myObj = [{
  name: 'Вася',
  surname: 'Петров',
  phone: '333153',
  year: '15',
  sex: 'Муж',
  data: '31.01'
}, {
  name: 'Саша',
  surname: 'Михайлов',
  phone: '412344',
  year: '14',
  sex: 'Муж',
  data: '30.01'
}, {
  name: 'Даня',
  surname: 'Дудкин',
  phone: '33-4323',
  year: '19',
  sex: 'Муж',
  data: '07.01'
}, {
  name: 'Иван',
  surname: 'Козлов',
  phone: '3334063',
  year: '25',
  sex: 'Муж',
  data: '06.03'
}];
document.querySelector('.table').innerHTML = "<table class=\"User\"></table>";

function clickButton() {
  myObj.forEach(function (person) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>".concat(person.name, "</td>\n                    <td>").concat(person.surname, "</td>\n                    <td>").concat(person.phone, "</td>\n                    <td>").concat(person.year, "</td>\n                    <td>").concat(person.sex, "</td>\n                    <td>").concat(person.data, "</td>");
    document.querySelector('.User').appendChild(row);
  });
}