//Console . time
/* console.time("Response Time");


console.timeEnd("Response Time");



//Date object

update();
setInitTime();
stopUpdate();
setInterval (update, 1000);
setInterval (stopUpdate, 10);  
// let x = 100000000;

// date = date.toLocaleDateString();
// console.log(date);
// document.getElementById("myLable").innerHTML = update(date);

// document.getElementById("myButton").onclick = function(){
//     x +=100000000000;
//     date = new Date(x);
//     date = date.toLocaleDateString();
//     document.getElementById("myLable").innerHTML = date;
//     hours = (hours % 12) || 12;
// }
function setInitTime(){
    let stime = `00:00:00`;
    document.getElementById("stoptime").innerHTML = stime;

}

function stopUpdate(){
    let hours = 00;
    let mins = 00;
    let secs = 00;
    let ms = 00;

    hours = update=>formatZeroes(hours);
    mins = update=>formatZeroes(mins);
    secs = update=>formatZeroes(secs);
    ms = update=>formatZeroes(ms);

}
function update(){
    let date = new Date();
    document.getElementById("myLable").innerHTML = formatDate(date);
function formatDate(date){

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let amOrPm = hours >= 12? "PM" : "AM";
    hours = (hours % 12) || 12;

    hours = formatZeroes(hours);
    mins = formatZeroes(mins);
    secs = formatZeroes(secs);

    return `${year}/${month}/${day} ${hours}: ${mins} : ${secs} ${amOrPm} `;
}


document.getElementById("btnStart").onclick = function(){

}

document.getElementById("btnStop").onclick = function(){

}

document.getElementById("btnReset").onclick = function(){

}
// function formatTime(date){
//     let hours = date.getHours();
//     let mins = date.getMinutes();
//     let secs = date.getSeconds();
//     let amOrPm = hours >= 12? "PM" : "AM";

//     hours = formatZeroes(hours);
//     mins = formatZeroes(mins);
//     secs = formatZeroes(secs);

//     return `${year}/${month}/${day} ${hours}: ${mins} : ${secs} ${amOrPm} `;
// }
function formatZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
}
}

/*
//SetInterval
let count = 0;
let max = window.prompt("Count up to?");
max = Number(max);

const myTimer = setInterval(countup,1000);

function countup(){
    count +=1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }    
}


/*
//SetTimeout() 
let item = "Book";
let price = 290;

let timer1 = setTimeout(firstMessage,3000, item, price);
let timer2 = setTimeout(secondMessage,6000);
let timer3 = setTimeout(thirdMessage,9000);

function firstMessage(item,price){
    alert (`Buy my ${item} for ${price}`);
}

function secondMessage(){
    alert ("Test message two");
}

function thirdMessage(){
    alert ("Test message three");
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("You bought me");
}


/*
//Error handling
try {
    let x = window.prompt("Enter a Number");
    x = Number (x);

    if (isNaN(x)) {
        console.log("This is not a number");
    }
    if(x == ""){
        console.log("Please Enter a number");
    }
    console.log (`${x} is a number`)
} catch (error) {
    console.log(error);
} finally{
    console.log("Always Print");
}

/*
//Anonymous objects
class Cards{
    constructor(value,suits){
        this.value = value;
        this.suits = suits;
    }
}

let cards = [ 
    new Cards("A","Hearts"),
    new Cards("A","Clubs"),
    new Cards("A","Diamonds"),
    new Cards("A","Spade"),
    new Cards("2","Hearts"),
    new Cards("2","Clubs"),
    new Cards("2","Diamonds"),
    new Cards("2","Spade"),
];

cards.forEach(Cards => console.log(`${Cards.value} ${Cards.suits}`));


// console.log(cards[0].value + cards[0].suits);
/*
//Array of objects
class car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
     drive() {
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new car("ferrari",2020,"Red");
const car2 = new car("BMW",2022,"Black");
const car3 = new car("Corvette",2020,"Red");

const cars = [car1,car2,car3];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);
race(cars);

function race(cars){
    for(const car of cars){
        car.drive();
    }

}


/*
//Arguments
class car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new car("ferrari",2020,"Red");
const car2 = new car("BMW",2022,"Black");
const car3 = new car("Corvette",2020,"Red");

changeColor(car1,"Yellow");
displayCar(car1);

function displayCar(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}

/*
//get and set
class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L ${this._gas / 50 * 100}%`;
    }
    set gas(value){
        if(value > 50){
            value = 50
        }
        this._gas = value;
    }
}

let car = new Car(400);
car.gas = 10;
console.log(car.power);
console.log(car.gas);

/*
//super
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal {
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal {
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit1", 1, 40);
const fish = new Fish("Fish", 2, 80);
const hawk = new Hawk("Hawk", 3, 200);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);


/*
//inheritance
class Animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
    run(){
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "Fish";

    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    name = "Hawk";
    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

hawk.eat();
hawk.fly();


/*
//static
class car{
    static numberOfCars = 0

    constructor(model){
        this.model = model;
        car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3..2..1..GO!!");
    }
}

const car1 = new car("Corvette");
const car2 = new car("Ferrari");
const car3 = new car("Audi");
const car4 = new car("Ford");

console.log(car.numberOfCars);
car.startRace();

/*
//constructor
class Student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Vince", 32,5.0);

console.log(student1.name);
student1.study();

/*
//classes
class player{
     score = 0;

     pause(){
        console.log("You pause the game");
     }
     exit(){
        console.log("You Exited the game");
     }
}

const player1 = new player();
const player2 = new player();
const player3 = new player();

player1.score += 1;
player2.score += 6;
player3.score += 9;
console.log(player1.score);
console.log(player2.score);
console.log(player3.score);
player1.pause();


/*
//objects - has properties and functions
//this keyword
const car1 = {
    model: "Mustang",
    color: "Black",
    year: "2023",

    drive: function(){
        console.log(`You stepped on the accelerator of ${this.model}`);
    },

    stop: function(){
        console.log("You stepped on the breaks");
    }
}

const car2 = {
    model: "Stinger",
    color: "Red",
    year: "2023",

    drive: function(){
        console.log(`You stepped on the accelerator of ${this.model}`);
    },

    stop: function(){
        console.log("You stepped on the breaks");
    }
}

console.log(car2.model);
console.log(car2.color);
car1.drive();
car2.stop();
car2.drive();
/*
//map
const store = new Map ([
    ["Shirt",10],
    ["Jeans",30],
    ["Socks",5],
    ["undies",100]
]);

let shoppingCart = 0;
shoppingCart += store.get("Shirt");
console.log(shoppingCart);
store.get("Shirt");
store.set("Hat", 40);
store.delete("Hat");
console.log(store.has("Jeans"));
console.log(store.size);


store.forEach((value,key) => console.log(`${key} ${value}`));

/*
//nested Functions
let userName = "Test username";
let messageCount = '20';

logIn();

function logIn(){
    displayUser();
    displayMsg();

    function displayUser(){
        console.log(`Welcome ${userName}`);
    }

    function displayMsg(){
        console.log(`You have ${messageCount} new messages`);
    }
}

/*
//shuffle array
let cards = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
shuffle(cards);
cards.forEach(card => console.log(card));

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex -=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}



// arrow function
//const percent = (x,y) => x/y *100;
//console.log(`${percent(85,100)}%`);

//let grades = [100,60,70,95,80,96,75];

//grades.sort((x,y) => y-x);
//grades.forEach((element) => console.log(element));


/*
//function expression
let count = 0;

document.getElementById("increase").onclick = function(){
    count +=1;
    document.getElementById("mylabel").innerHTML = count;
}

document.getElementById("decrease").onclick = function(){
    count -=1;
    document.getElementById("mylabel").innerHTML = count;
}
/*
const increase =
function(){
    count +=1;
    document.getElementById("mylabel").innerHTML = count;
}
const decrease = 
function(){
    count -=1;
    document.getElementById("mylabel").innerHTML = count;
}
//const greeting = function(){
//    console.log("Hellow world");
//}

//greeting();

/*
//sort arrays
let grades = [100,60,70,95,80,96,75];

desgrade = grades.sort(descending);
//asgrade = grades.sort(ascending);

desgrade.forEach(print);
//asgrade.forEach(print);

function descending(x,y){
    return y - x;
}

function ascending(x,y){
    return x - y;
}

function print(element){
    console.log(element);
}

/*
//array.reduce
let prices = [100,200,300,400,500,600];
let total = prices.reduce(checksum);

console.log(`The total price is: ${total}`);

function checksum(total, element){
    return total + element;
}
/*
//array.filter
let ages = [21,18,17,15,34,91];
let newage = ages.filter(check);

newage.forEach(print);

function check(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}

/*
//array map
let numbers = [3,6,9,12,15];
let squares= numbers.map(square);

squares.forEach(print);

function square(element){
    return Math.pow(element,4);
}

function print(element){
    console.log(element);
}


//for each 
/*let students = ["test1","test2","test3"];

students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element){
    console.log(element);
}

/*
let fruits = ["apple", "banana", "orange", "mango"];

fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);

}
*/


//Number guessing game 
/*
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function(){
   let guess = document.getElementById("guessField").value;
    guesses +=1;

    if(answer == guess){
        //console.log("Your answer is correct");
        alert( `${answer} is the # it took you ${guesses} tries`);
    }
    else if (guess < answer){
        alert("too small");
    } else{
        alert("too large");
    }
}
*/

/*
let area;
let width;
let height;

width = window.prompt("Enter width: ");
height = window.prompt("Enter height: ");

area = getArea(width, height);
console.log("The area is: ", area);

function getArea(width, height){
    return width * height;

}


// ternary operation simple if else statement 
// condition ? if : else ;
 //age >= 18 ? console.log("Win") :  console.log("lose") 

/*
let name = window.prompt("Enter celebrants name: ");
let age = window.prompt("Enter celebrants age: ");

birthdaySong();
birthdaySong();

function birthdaySong(){
    console.log("Happy birthday");
    console.log("Happy birthday ", name);
    console.log("You are ", age , " years old");
}



let symbol = window.prompt("Enter symbol to be user: ");
let rows = window.prompt("Enter number of rows: ");
let columns = window.prompt("Enter number of columns: ");


for(let i = 1; i <= rows; i+=1){
  for(let j = 1 ; j <= columns; j += 1 ){
    document.getElementById("myTree").innerHTML += symbol;
        for(h = 1; h <= columns; h += 2 ){
            document.getElementById("myTree").innerHTML += " ";
        }
        }
        
      document.getElementById("myTree").innerHTML += "<br>";
}







/*
let username = "";

while(username == ""){
    username = window.prompt("Enter your name ");
}
console.log("Hello " + username );



/*
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}


*/
//let firstname = "Vince";
//let age = 21;


let age = window.prompt("How old are You? ");

age = Number(age);
age += 1;

console.log("Hello you are " + age + " Years old");


/*
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
*/
//console.log(age);
//console.log(firstname);



/*
//first part
console.log('Hello world');
console.log("Hellow again");

window.alert('hello world pop out');
*/