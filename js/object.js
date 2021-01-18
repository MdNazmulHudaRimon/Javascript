// let's learn about object
var myDetails = {                  //this is how we can declare and initialize a object
    name : "Md Nazmul Huda Rimon",
    id : 2191081012,
    university : "Uttara University",
    phone : +8801312595203
}
// let's try another one
var ashfakDetails = {
    name : "Ashfak Haider",
    id : 2191081013,
    university : "East-West University",
    phone : +8801957472958
}
console.log(myDetails);
console.log(ashfakDetails);

// let's know how we can update  object properties
myDetails.phone = 5204; // an way of updating object
ashfakDetails["phone"] =2957; //another way of updating object

// let's know how we can access any item of object 
var myPhoneNo =  myDetails.phone;//this is a way of accessing object properties
console.log(myPhoneNo);
var ashPhoneNo = ashfakDetails["phone"];//this is the second way how we can access object properties
console.log(ashPhoneNo);

//let's know how we can add properties on object 
myDetails.cgpa  = 3.25; //here is the way we can add new properties on object
ashfakDetails.cgpa =  3.5;

console.log(myDetails);
console.log(ashfakDetails);
var numbers = [1,2,3,4,5];
var result = numbers.slice(-1,3);
console.log(result);


