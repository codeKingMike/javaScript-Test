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
for (i = 0; i < cars.length; i++) {
    text += cars[i] + '<br>';
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


var sentence = `My name is  ${mike.name}  and I live in the city of ${mike.city}`;

document.getElementById('result5').innerHTML = sentence;

document.getElementById('result3').innerHTML = mikeUpper;

console.log(mike);


document.getElementById('btn').addEventListener('click', getTheDate);

function getTheDate() {
    const d = new Date();
    document.getElementById('result4').innerHTML = d;
    console.log("Todays date is " + d);
}

// MESSING WITH JS MAKING BACKGROUND APPEAR WHEN MOUSE HOVER OVER
document.getElementById('colSection').addEventListener('mouseover', sectionChanged);

function sectionChanged() {
    document.getElementById('colSection').style.backgroundImage = "url('https://www.pactsafe.com/hs-fs/hubfs/Node-JS-logo.png?t=1502379401224&width=750&name=Node-JS-logo.png')";

    document.getElementById('colSection').style.color = "#fff";

    document.getElementById('colSection').style.backgroundSize = "cover";

    console.log("Mouse over")
}


// CHANGING SECTION BACK WHEN MOUSE IS OUT
document.getElementById('colSection').addEventListener('mouseout', sectionChangedBack);

function sectionChangedBack() {
    document.getElementById('colSection').style.backgroundImage = "none";

    document.getElementById('colSection').style.color = "#000";

    console.log("Mouse out")
}

// PLAYING WITH FOR IN METHOD
var lugCars = ['Bently', 'Porch', 'Hummer', 'Viper', 'Testla'];

var x, txt;
txt = "";
for (x in lugCars) {
    txt += lugCars[x] + "<br>";
}
document.getElementById('testing').innerHTML = txt;