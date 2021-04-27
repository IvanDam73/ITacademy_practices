const myObj = [
    {
    name: 'Вася',
    surname: 'Петров',
    phone: '333153',
    year: '15',
    sex: 'Муж',
    data: '31.01'
    },

    {
    name: 'Саша',
    surname: 'Михайлов',
    phone: '412344',
    year: '14',
    sex: 'Муж',
    data: '30.01'
    },

    {
    name: 'Даня',
    surname: 'Дудкин',
    phone: '33-4323',
    year: '19',
    sex: 'Муж',
    data: '07.01'
    },

    {
    name: 'Иван',
    surname: 'Козлов',
    phone: '3334063',
    year: '25',
    sex: 'Муж',
    data: '06.03'
    },
];

document.querySelector('.table').innerHTML = `<table class="User"></table>`;


function clickButton () {
myObj.forEach(function(person) {
    let row = document.createElement('tr');
    row.innerHTML =`<td>${person.name}</td>
                    <td>${person.surname}</td>
                    <td>${person.phone}</td>
                    <td>${person.year}</td>
                    <td>${person.sex}</td>
                    <td>${person.data}</td>`;
    document.querySelector('.User').appendChild(row);
    });
}












