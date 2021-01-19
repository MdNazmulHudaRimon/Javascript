//let's try to convert inch to feet
// first we will try using a function
function findInch(inch){
    var feet  = inch/12;
    return feet;
}
var myFeet = findInch(120);
console.log(myFeet);
var momFeet = findInch(480);
console.log(momFeet);
// finished  

//let's try using for loop and an array
var inches = [180,580,980,320,5000,4500];
for(var i = 0; i<inches.length ; i++){
    var  feets = inches[i]/12;
    console.log(feets);
}