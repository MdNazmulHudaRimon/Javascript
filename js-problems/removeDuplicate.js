var studentID = [12,28,29,10,15,15,18,18,19];
console.log(studentID);
var uniqueID = [];
for(var i = 0; i<studentID.length; i++){
    var elements = studentID[i];
    var index = uniqueID.indexOf(elements);
    if(index == -1){
         uniqueID.push(elements);
    }
}
console.log(uniqueID);