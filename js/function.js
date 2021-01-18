//now we are going to learn about function
function sayLoveYou(){        //this is the way how  we can declare a function
    console.log("Jaan ow baby");
    console.log("Sonar moyna pakhi,,,,kobe tumi hobe amar");
    console.log("asibe buke");
}
sayLoveYou();       // this is the way how we can call the function

/*One of the best benefit of function is that we can call the function anywhere in the program and 
as many time we wants and it will show output as many times we call it */

function doubleIt(number){
    var result =  number * 2;
    console.log(result);
}
doubleIt(5);    //we call the doubleIt function and give the value 5 now it will show the result
doubleIt(10);   //we call the doubleIt function and give the value 5 now it will show the result
doubleIt(100);  //we call the doubleIt function and give the value 5 now it will show the result


//but what if we want to use the output values? let's see what we can do
function tripleIt(num){
    var result = num*3; //here result will get the value from call function but instead of showing it the value will be returned to result....
    return result;   
}
var first = tripleIt(30);
var second = tripleIt(50);
var total = first + second;
console.log(first,second);
console.log(total);


//what if we need more than one parameter?
function add(num1, num2){
    result = num1 + num2; 
    return result;
}
var sum = add(15,20);
console.log(sum);

