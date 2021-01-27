function addNumbers(num1,num2){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        var num  = arguments[i];
        sum =  sum + num;
    }        
    return sum;;
}
var result = addNumbers(3,5,8,16);
console.log(result);