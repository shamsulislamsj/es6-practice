//যখন তুমি একটা ভেলু ডিক্লেয়ার কর এবং পুরোটার ভেলু আর চেইঞ্জ করবে না তখন const এপ্লাই হবে।

const hubby ="abdurKarim";
//hubby="johirUddin"  you cannot change main value
//hubby="korimUddin"
console.log(hubby);

// U CAN CHANGE ARRAY ELEMENT BUT NOT CHANGE VALUE
const numbers = [ 12, 45];
numbers[1] =88;
numbers.push(12);//add an element
numbers["samim, komol,"]//not change value
console.log(numbers);//array element


//Create an object :
const car = {type:"fiat", model:"500", color:"white"};
//change a property:
     car.color = "red";
//add a property:
    car.owner = "jishan";
console.log(car);



//যখন তুমি একটা ভেলু ডিক্লেয়ার কর এবং পুরোটার ভেলু চেইঞ্জ করবে  তখন let এপ্লাই হবে।
let patientName = "Rahim Miah";
    patientName = "Abdul Karim";
    patientName = "Subo dotto";
console.log(patientName);
let sum =0;
for(var i=0; i<10; i++){
    sum = sum + i;
}
console.log(i);

/*যখন তুমি একটা ভেলু ডিক্লেয়ার কর এবং পুরোটার ভেলু লিক না হওয়ার জন্য তখন let এপ্লাই হবে।
let sum=0;
for( let i=o; i <10; i++){
    sum = sum +i;
}
console.log(i);*/

/*FUNCTION DEFAULT PARAMETER FOR NOT PROVIDED VALUES: default parameter : Definition
default parameters allow parameters to be set with initial values.*/

function add (num1, num2){
    return num1 + num2;
}
const total = add(15, 17);
console.log(total);

//if forget give 17
function add (num1, num2){
    return num1 + num2;
}
const total1 = add(15);
console.log(total1);


function add (num1, num2){
    num2 = num2 || 0;         //or ||
    return num1 + num2;
}
const total3 = add(15);
console.log(total3);


//es6 
function add (num1, num2 = 20){
    return num1 + num2;
}
const total4 = add(20);
console.log(total4);


function add (num1, num2 = 20){
    return num1 + num2;
}
const total5 = add(20, 25);
console.log(total5);

//TEMPLATE STRING, MULTIPLE LINE STRING:

const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + lastName;
//HOW CAN GAP THIS NAME MIDDLE
const fullName1 = firstName +" "+ lastName;
console.log(fullName1);
//how can add another thing
const fullName2 = firstName +" "+ lastName + " is a good boy";
console.log(fullName2);
//simple way ES6
const fullName4 = `${firstName} ${lastName} is a good boy.`;
console.log(fullName4);
//u can sum use ES6
const fullName5 = `${firstName} ${20+23+23} is a men.`;
console.log(fullName5);
//Multiline Simple way ES6
const multiline = `I love You
I Miss You
I Need You.`;
console.log(multiline);

//ARROW Function, MULTIPLE Maltiple Parameters, Function Body:
//function declare :

/*function doubleIt(num){
    return num * 2;
}
const result = doubleIt(10);
console.log(result);

//function declare 2 way :
const doubleIt = function(num){
    return num * 2;
}
const result = doubleIt(50);
console.log(result);*/

//function declare simple way ES6:
const doubleIt = num => num * 2;
const result = doubleIt(100);
console.log(result);



