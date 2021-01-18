//let's learn about array 
var anArray = [10,20,30,50,70];//here's how we can declare and initialize an array
console.log(anArray);//let's see the elements of array in console
console.log(anArray[0]);//we can access array items using index just like this example,lets try more
console.log(anArray[2]);//so now we know how we can access array

//let's know how we can put array elements value into another variable

var myAge = anArray[1];//here we are putting the 2 second value of the array into the myAge variable
console.log(myAge);//ok now we know what is my age 
//let's learn how to change any value of the array
//let's say we want to change the third element in the array
anArray[2] = 55;
console.log(anArray[2]);
console.log(anArray[4]);
//let's find the position of any element using indexOf 
console.log(anArray.indexOf(55));

//let's learn about push and pop 
//if we want to insert one or more new item into the array we will use push
console.log(anArray);
anArray.push(222);//this will insert 222 into the last of the array
anArray.push(111);//this will insert 111  into the last of the array
console.log(anArray);
anArray.pop()//this will remove an item from the last of the array
console.log(anArray);//so we can see the  output that last item which was 111 is removed


//let's learn how to insert and delete item from the beginning of an array
//shift == pop and unshift == push 
anArray.shift()//.shift works like pop but it removes items from the beginning of an array
console.log(anArray);
anArray.unshift(555);//unshift works like push but it inserts items from the beginning of an array
console.log(anArray);

//let's learn about the length of an array
//how we can know length of an array 
console.log(anArray.length)//using .length keyword we can easily know the length of array

//let's learn about slice
//slicing means cutting elements from array
var slice = anArray.slice(3)//that means we want to cut the first 3 elements if we want to cut 2 we may use .slice(2)
console.log(slice);
console.log(anArray.slice(2,4));