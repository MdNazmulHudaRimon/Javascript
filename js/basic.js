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
console.log(number1 + number2);
number2 = parseInt(number2);//using parseInt we are going to covert the floating point number into integer number
console.log(number1 + number2);

//let's do some mathmatical operation

var num1 = 10;
var num2 = 20;
var result;
result = num2 % num1;
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
var num6 = Math.random() * 100;
var randomNum = Math.round(num6);
console.log(randomNum);


document.write("Hello world1!");//this is an inline comment
var myName;//here we declares a variable
myName = "Rimon";//here we initialized the variable
console.log(myName);
var myAge;//here we declares a variable
myAge = 20; //here we initialized the variable
console.log(myAge);
var myRealName = myName; //here we  assigned the value of myName variable in myRealName
var myRealAge = myAge;//here we assigned the value of myAge variable in myRealAge variable;
console.log(myRealName);
console.log(myRealAge);
var a = 5;//here we declared and initialized the variable
var b = 10;
var c = "a string";//here we declared a variable and assigned a string inside it
a = a + 1; //here we are doing some addition
b = b + 5;
c = "I am " + c; //here we are connecting the strings
console.log(a);
console.log(b);
console.log(c);
var d = 10 + 50; //here we are doing addition
console.log(d);
var d = d - 10; //here  we are doing subtraction
console.log(d);
var e = 15 * 10; //here we are doing multiplication
console.log(e);
var f = 10 / 2;  //here we are doing division
console.log(f);
myAge++ //it do the same work as myAge = myAge + 1; it is an increment operation
console.log(myAge);
myAge--; //it do the same work as myAge = myAge -1; it is a decrement operation
console.log(myAge);
var myDecimal = 2.5;// we can decalre decimal numbers in javascript as well.
myDecimal = myDecimal * myDecimal;
console.log(myDecimal);
var remainder;
remainder = 11 % 3; //The remainder operator % gives the remainder of the division of two numbers.
console.log(remainder);
a += 10;// this initialization is same as a = a+10;
b += 50; // this initialization is same as b = b+50;
d += 10;  // this initilization is same as d = d+10;
console.log(a);
console.log(b);
console.log(d);
a -= 11; // this initialization is same as  a = a -11;
console.log(a)
var aString = "Hello world"; /*if we need  to declare strings then we must need to give the value inside  
                                double or  single quotation */
console.log(aString);
var sampleStr = "I am a \"double quoted\" string inside \"double quotes\"."; /*this is  how we give quotation
                                                                                 inside string*/
console.log(sampleStr);
var myS = "FirstLine\n\t\\SecondLine\nThirdLine";// /t  means tab /n means new line
console.log(myS);
var concentation = "I came first " + "and I came second.";/* this is how we can connect two strings in one 
                                                            single variable;*/
console.log(concentation);
//we can connect string in another simple way
var aa = "This is the first string. ";
aa += "This is the second string.";//here is how we can connect  strings in another simple way by using +=;
console.log(aa);
//now we will build a string in "MADLIBS" style
var name = "Rimon";
var myCondition;
myCondition = "Hello world, I am " + name + " and I love to do coding effortlessly"; /*here is the way how we 
                                                                            can connect string in madlibs style*/
console.log(myCondition);

/*we can build a string over multiple lines out of string literals, we can also append variables 
to a string using the plus equals (+=) operator.*/
var someAdj = "Funny Guy";
var me = "I am a ";
me += someAdj; // this is how  we can connect  two variables simply.
console.log(me);

// lets find the length of string by writing .length after the string variable or string literal.
var myNamelength = 0;
myNamelength = myName.length //here is how we can find length of any string;
console.log(myNamelength);

//Bracket Notation to Find the any Character in a String;
var firstName = "Nazmul";
var firstNameLength = firstName.length;
console.log(firstNameLength);
var firstLetterOfFirstName;
var secondLetterOfFirstName;
var thirdLetterOfFirstName;
var fourthLetterOfFirstName;
var fifthLetterOfFirstName;
var sixthLetterOfFirstName;
//here is the way we can find any specific character from a string;
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);
secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);
thirdLetterOfFirstName = firstName[2];
console.log(thirdLetterOfFirstName);
fourthLetterOfFirstName = firstName[3];
console.log(fourthLetterOfFirstName);
fifthLetterOfFirstName = firstName[4];
console.log(fifthLetterOfFirstName);
sixthLetterOfFirstName = firstName[5];
console.log(sixthLetterOfFirstName);

//in a string we can not change any specific  character but we can change the full string;
var myFirstName = "Nazmul Huda";
var myFirstName = "Md Nazmul Huda";
console.log(myFirstName);
//getting the last character of the string using  .length;
var lastletterofMyFirstName;
lastletterofMyFirstName = myFirstName[myFirstName.length - 1];/*this is  how we can get the last character 
                                                                of any string; */
console.log(lastletterofMyFirstName);

//Bracket Notation to Find the Nth-to-Last Character in a String;
var anyLetterOfMyFirstName;
anyLetterOfMyFirstName = myFirstName[myFirstName.length - 2]; /*here is how we can find any last character
                                                            of  string using .length - nth character;*/
console.log(anyLetterOfMyFirstName);


//array
myArray = ["Rimon", "Rifat", "Sumaiyya", 21,]; //this is how we store multiple values in one variable using array;

//multi-dimensional array or Nest one Array within Another Array
multiDiemnsionalArray = [["rimon", 20], ["rifat", 15], ["sumaia", 5]];
console.log(multiDiemnsionalArray);

//Access Array Data with Indexes
var array = [100, 200, 300, 400, 500];//here counting starts with 0;
console.log(array);
var arrayData = array[2];//array[2] means the third value in the array;
console.log(arrayData);

//Modify Array Data With Indexes
array[0] = 30;
array[1] = 40;
array[2] = 50;
array[3] = 60;
array[4] = 70;
console.log(array);

//accessing multidimensional arrays using index;

var aMultiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [[13, 14, 15], 16, 17, 18], [19, 20, 21]];
var myData = aMultiDimensionalArray[4][3];
console.log(myData);

//Manipulate Arrays With push()
var arr1 = [1, 2, 3];
console.log(arr1);
arr1.push(4);//push inserts new value into the last of the array;
console.log(arr1);
var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

//Manipulate Arrays With pop();

var arr3 = [1, 2, 3];
var arr4;
arr4 = arr3.pop();//pop() removes the last item of an array and 
console.log(arr4);
console.log(arr3);

//Manipulate Arrays With shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromArrray;
removedFromArrray = ourArray.shift()/* shift do the same work as pop but shift() removes value 
                                      from the first of array*/
console.log(removedFromArrray);

//Manipulate Arrays With unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
console.log(ourArray);
ourArray.unshift("Rimon");/*unshift() do the same work like push but it inserts vallue from the first
                            of the array*/
console.log(ourArray);
//making a shopping list using array
var shoppingList;
shoppingList = [["chocolates", 10], ["kinder joy", 1], ["Alu", 10], ["potol", 10], ["mula", 10]];
console.log(shoppingList);

//Write Reusable JavaScript with Functions;;

function reusableFunc() {
    console.log("Hello World");
}
reusableFunc();
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

//global scope  
//Local Scope and Functions
/*Variables which are declared within a function, as well as the function parameters have
 local scope. That means, they are only visible within that function.*/
function fun1() {
    var loc = 5;//here we declared a local scope because we used keyword var
    console.log(loc)//local scope don't work outside of function;
    global = 10;//here we declared and assigned a global scope  because we didn't use var keyword
    console.log(global);//globar scope work and can be accessed outside of function
}
fun1();
console.log(global);

// Return a Value from a Function with Return
//we can use a return statement to send a value back out of a function.
function timesFive(num) {
    return num * 5;
}
var answer = timesFive(5);
console.log(answer);

//Understanding Undefined Value returned from a Function
var sum = 0;
function addSum(num) {
    sum = sum + num;
}
addSum(3);
console.log(addSum);//still it will be undefined;
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

//Queue
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift(item);
    // Only change code above this line
}
// Setup
var testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//if statement
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

function test(val) {
    if (val == 10) {
        return "true";
    }
    return "false";
}
test(12);

// Comparison with the Greater Than Operator

function testGreaterThan(value) {
    if (value > 100) {
        return "over 100";
    }
    if (value > 10) {
        return "over 10";
    }
    return "less than 10";
}
testGreaterThan(10);
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }
    if (val >= 10) {  // Change this line
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);


function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }
    if (val < 55) {  // Change this line
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

//comparison with logical and operator

function testLogicalAnd(val) {
    if (val > 5) {
        if (val < 10) {
            return "Yes";
        }
    }
    return "No";
}
testLogicalAnd(10);

//we can do it using logical and operator
function logicalAnd(val1) {
    if (val1 > 5 && val1 < 10) {
        return "True";
    }
    return "False";
}
logicalAnd(9);

function testElse(val2) {
    result = "";
    if (val2 > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "Similar or smaller than 5";
    }
}
testElse(5);
console.log(result);

//else if
function elif(val3) {
    result1 = "";
    if (val3 > 50) {
        result1 = "Bigger than 50";
    } else if (val3 < 20) {
        result1 = "Smaller than 20";
    }
    else {
        result1 = "Within 20 to 50";
    }
}
elif(33);
console.log(result1);

function testSize(num2) {
    result3 = "";
    // Only change code below this line
    if (num2 < 5) {
        result3 = "Tiny";
    }
    else if (num2 < 10) {
        result3 = "Small";
    }
    else if (num2 < 15) {
        result3 = "Medium";
    }
    else if (num2 < 20) {
        result3 = "Large"
    }
    else if (num2 >= 20) {
        result3 = "Huge";
    }
    else {
        result3 = "Change Me";
    }
    // Only change code above this line
}

testSize(7);
console.log(result3);


//golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }
    else {
        return "Change Me";
    }

    // Only change code above this line
}

console.log(golfScore(5, 4));

//switch statement
function switchStatement(val3) {
    answer1 = "";
    switch (val3) {
        case 1:
            answer1 = "alpha";
            break;
        case 2:
            answer1 = "beeta";
            break;
        case 3:
            answer1 = "gaama";
            break;
        case 4:
            answer1 = "delta";
            break;
    }
    return answer1;
}
console.log(switchStatement(3));



function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

// Change this value to test
console.log(switchOfStuff("b"));

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }


    // Only change code above this line
    return answer;
}

console.log(sequentialSizes(1));

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line  
    return answer;
}

// Change this value to test
chainToSwitch(7);

function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
        return true;
    } else {
        return false;
    }
    // Only change code above this line
}

console.log(isLess(10, 15));


function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

console.log(isLess(10, 15));

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, -2));

//Building Javascript Objects
var cat = {
    "name": "Tom",
    "legs": 4,
    "tails": 1,
    "enemies": ["water", "Dogs"]
};//here I hav created a javascript object

var obj = {
    "name": "ford",
    "wheels": 4,
    "model": "focus"
};
var myDog = {
    "name": "Tom",
    "legs": 4,
    "tails": 1,
    "friends": ["jerry", "tommy"]
}
console.log(myDog);

//Accessing Object Properties With Dot Notation

var objPropertie1 = obj.name;
console.log(objPropertie1);
var accessingObjData = myDog.legs;
console.log(accessingObjData);

//Accessing Object Properties with Bracket Notation
obj["name"];//that's an another way how we can access object properties
console.log(myDog["name"]);
myDog["friends"];//it will return the arrary which includes jerry and tom

//updating object properties;

myDog.name = "Tommy"
console.log(myDog.name);


//addding new properties  in object;
myDog.bark = "woof";//added new properties
myDog.enemey = ["another dogs", "black dog"];//here is how we can add new properties to  our js object
console.log(myDog);
console.log(myDog["bark"]);


//Delete Properties from a JavaScript Object

delete myDog.bark;//here's how we can delete any unnecessary properties from object
console.log(myDog);//let's see the result

//using object for lookups

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    // Only change code above this line
    return result;
}

// Change this value to test
console.log(phoneticLookup("foxtrot"));













