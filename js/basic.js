//hey guys let's start programming in javascript;
console.log("Hello world");//this is how we can print something in console
var name; //using var keyword  we can declare any variable;
name = "Rimon";//here is how we assign any value in variable
console.log(name);//now we want to see the output in console
//let's learn about data types
//now we will learn about data types

var myNumber; //here we again declares another variable;
myNumber = 10; //assigned value into the variable;
console.log(myNumber);
//lets know the type of the data we assigned into the variable;
console.log(typeof myNumber);//using typeof keyword we can easily know what type of data it is
var myName = "Nazmul Huda";//here we declare and assigned the variable in same line
/*and if the value of the variable is combination of more than one letters and it starts and
ends with double quotes than it is a string */
console.log(myName);
console.log(typeof myName);

var bollean = true;
console.log(bollean);
console.log(typeof bollean);
//here we will see lowercase and uppercase conversion
var promise = "I promise that I will work hard to become a programmer";
console.log(promise.toLowerCase());//the output will be all lower case letters
console.log(promise.toLocaleUpperCase())//the output will be all uppercase letters
//using indexOf operator we can find any word in string
console.log(promise.indexOf('will'));//this will show output 17
console.log(promise.indexOf('promise'));// this will show output  2
console.log(promise.indexOf('HARD'));//this will show output -1 because uppercase HARD isn't in the string
console.log(promise.split(' '));// this is how we can divide any string using spilit
var number1 = 25; //this is an integer type variable;
var number2 = 15.5; //this is a floating point variable;
console.log(number1+number2);
number2 = parseInt(number2);//using parseInt we are going to covert the floating point number into integer number
console.log(number1+number2);

//let's do some mathmatical operation

var num1 = 10;
var num2 = 20;
var result;
result = num2%num1;
console.log(result);

//math absolute round floor ceil random
var number = -5;
var absNumber = Math.abs(number);//that will make the number positive
console.log(absNumber);
var num3 = 4.56;
var roundNumber = Math.round(num3);
console.log(roundNumber);
var num4 = 5.55;
var ceilNum = Math.ceil(num4);
console.log(ceilNum);
var num5 = 6.66;
var floorNum = Math.floor(num5);
console.log(floorNum);
var num6 = Math.random()*100;
var randomNum = Math.round(num6);
console.log(randomNum);













