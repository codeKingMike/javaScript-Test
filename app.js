// console.log('Javascrit is working NOW!')


// Testing Javascript with what I remember so far so good

var numbers1 = [34, 65, 76, 26, 77];
var numbers2 = numbers1.map(myFunction);
var numbers3 = numbers2.join(', ');
var numbers4 = [33, 44, 55, 22, 77];
var numbers5 = numbers4.join(', ');

document.getElementById('result').innerHTML = numbers2;

function myFunction(value) {
    return value;
}

// Adding event listener when id result is clicked
document.getElementById('result').addEventListener('click', clickFunction);

function clickFunction() {
    document.getElementById('result').innerHTML = numbers5;
    console.log('Numbers change when clicked');
}

// Changing main title with DOM 
document.getElementById('title').innerHTML = "JavaScript Test";



console.log('Javascript is really fun!');


// Making an Array 
const whatToLearn = [
    "React.js", 
    "Node.js", 
    "Javascript"
];


console.log("I am Learning", whatToLearn[0]);

var cars = ['Neon', 'Civic', 'Maximum', 'Corola', 'Accord'];
var text = '';
var i;
for(i = 0; i < cars.length; i++) {
    text +=  cars[i] + '<br>';
}

var carsUpper = text.toUpperCase();

document.getElementById('result2').addEventListener('click', carsUpperC);

function carsUpperC() {
    document.getElementById('result2').innerHTML = carsUpper;
    console.log(window)
}

document.getElementById('result2').innerHTML = text;

// making a proptypes
function person(name, address, city, state, zip) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
}

var mike = new person('Michael Harris', '777 Elm St', 'Compton', 'CA', '90220');
var mikeUpper = mike.name.toUpperCase();

document.getElementById('result3').innerHTML = mikeUpper;