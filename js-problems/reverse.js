function reverseString(str){
    var reverse  = "";
    for(var i=0;i<str.length;i++){
        var char  = str[i];
        reverse =  char +reverse ;
    }
    return reverse;
}
var statement = "Hey Guys how are you all?";
var forAlien = reverseString(statement);
console.log(forAlien);
        