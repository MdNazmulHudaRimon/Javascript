function circuitPower(voltage, current) {
    power = voltage * current;
    return power;
}
// var totalPower = circuitPower(480,2);
// console.log(totalPower);
//circuitpower finished
function cubes(a) {
    return a ** 3; //that's how we can do quve in js
}
// var final = cubes(3);
// console.log(final);

//second one done
//function of taking age and returning age in days
function calcAge(age) {
    return age * 365;
}
// var days = calcAge(65);
// console.log(days);

// Return the First Element in an Array

function getFirstValue(arr) {
    var firstValue = arr[0];
    return firstValue;
}
// var answer = getFirstValue([80,5,100]);
// console.log(answer);

// Return the Remainder from Two Numbers

function remainder(num1, num2) {
    var remainder = num1 % num2;
    return remainder;
}
// Repeat String

function repeatString(name, number) {
    if (typeof name != 'string') {
        console.log("Not a String");
    }
    else {
        var repeat = name.repeat(number);
    }
    return repeat;
}
// var ans = repeatString("Rimon",3);
// console.log(ans);
// Return the Next Number from the Integer Passed
function addition(num) {
    return num++;// it will add one whatever the value we put into function
}

// sum of two numbers;
function additionOfTwo(num1, num2) {
    sum = num1 + num2;
    return sum;
}
// square 
function squared(b) {
    return b * b;
}
// var r = squared(100);
// console.log(r);

// conncecting two strings
function giveMeSomething(line) {
    var str1 = "something";
    var finalStr = str1.concat(" ", line);//that's  how we can connect two strings
    return finalStr;
}
// var f = giveMeSomething("is better than nothing");
// console.log(f);

//connecting strings

function nameString(name) {
    var b = "Edabit";
    var result = name + b;//another way to connect strings
    return result;
}
// var ff = nameString("Rimon");
// console.log(ff);

// calculate the total amount of legs
function animals(chickens, cows, tigers) {
    var chickenLeg = chickens * 2;
    var cowLeg = cows * 4;
    var tigersLeg = tigers * 4;
    var totalLegs = chickenLeg + cowLeg + tigersLeg;
    return totalLegs;
}
// var t = animals(2,3,5);
// console.log(t);


// and && operator truth table;

function and(a, b) {
    if (a === true && b === true) {
        return true;
    }
    else {
        return false;
    }
}
// var dd = and(true,false);
// console.log(dd);

// Convert Hours into Seconds

function howManySeconds(hour) {
    var secondsInOneHour = 3600;
    var totalSeconds = hour * secondsInOneHour;
    return totalSeconds;
}

// Are the Numbers Equal?
function isSameNum(num1, num2) {
    if (num1 === num2) {
        return true;
    }
    else {
        return false;
    }
}
// var ddd = isSameNum(4,4);
// console.log(ddd);

// sum of the values in array 
function simpleArraySum(ar) {
    var sum = 0;
    for (i = 0; i < ar.length; i++) {
        var elements = ar[i];
        sum += elements;
    }
    return sum;
}
var t = simpleArraySum([1,2,3,4,10,11]);
console.log(t);