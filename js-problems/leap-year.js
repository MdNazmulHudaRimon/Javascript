function isLeapYear(year){
    let remainder = year % 4 && year % 400;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const check =  isLeapYear(2018);
console.log(check);


//we can do this another way 

function checkLeapYear(year){
    let lYear =  year % 4 && year % 400;
    return lYear;
}
const checkYear = checkLeapYear(1998);
if(checkYear == 0){
    console.log("It's a leap year");
}
else{
    console.log("It's not a leap year");
}
