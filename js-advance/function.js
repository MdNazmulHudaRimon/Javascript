function evenOrOdd(element){
    var result;
    if(element%2 == 0){
        // console.log(element, "is even number");
        // return element;
        result = element;
    }
    else{
        // console.log(element, "is odd number");
        // return element;
        result = element;
    }
    return result;
}
var letsCheck = evenOrOdd(5);
console.log("result",letsCheck);

// nums = [5,10,15,20,25,30,35,40,45,50];
// for(var i=0;i<nums.length;i++){
//     var  element = nums[i];
//     evenOrOdd(element);
// }

// // friends = [20,21,23,26,28];
// for (let i = 0; i < friends.length; i++) {
//     const age = friends[i];
//     evenOrOdd(age);
// }