var numbers = [88,80,95,98,99,55,87,88];
var max = numbers[0];
for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    if(element>max){
        max = element;
    }
}
console.log(max);

//let's try to find out the sum of the array
var sum = 0;
for(i=0; i<numbers.length; i++){
    var elements = numbers[i];
    sum += elements;
}
console.log(sum);



var array = [25,28,56,54,56,88,66,,25,2588544,14454];
var maximum = array[0];
for(let i=0; i<=array.length;i++){
    var elements = array[i];
    if(elements>max){
        max = elements;
    }
}
console.log(max);