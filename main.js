"use strict"

function renderCoffee(coffees) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffees.name + '</h2>';
    html += '<h3>' + coffees.roast + '</h3>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function selectCoffees(e){
    e.preventDefault();
    var selectName = search.value;
    var allCoffees = [];
    coffees.forEach(function (coffee){
        if(coffee.name.toLowerCase().includes(selectName)){
            allCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(allCoffees);
}


function addCoffee(){
    var coffee ={
        id: '',
        name: '',
        roast: ''
    }
    coffee.id= coffees.length+1;
    coffee.name= document.getElementById('addCoffeeName').value;
    coffee.roast = document.getElementById('addCoffeeRoast').value;
    coffees.push(coffee);
    tbody.innerHTML = renderCoffees(coffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function ascending(a, b ){
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    var comparison = 0;
    if(nameA <nameB ){
        comparison=1;
    }else if (nameA > nameB){
        comparison= -1;
    }
    return comparison;
}

coffees.sort(ascending);


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var searchButton = document.querySelector('#searchName');
var submit = document.querySelector('#submit2');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchButton.addEventListener('click', selectCoffees);
search.addEventListener('keyup',selectCoffees);
submit.addEventListener('click',addCoffee);