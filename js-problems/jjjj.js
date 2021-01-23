// var array = ["Nazmul Huda", "Ashfak Haider", "Abujabal Fuad", "Saiful Raihan"]
// var large = 0;
// var max;
// for (var i = 0; i < array.length; i++) {
//     if (array[i].length > large) {
//         var large = array[i].length;
//         max = array[i];
//     }
// }
// console.log(max);

// function megaFriends(friends) {
//     friends = friends.split(' ');
//     var longest = 0;
//     for(var i=0; i<megaFriends.length; i++){
//         if(megaFriends[i].length > longest){
//             longest = megaFriends[i].length;
//         }
//         return longest;
//     }

// }
// var friendsname = megaFriends("hELLO EVERYONE, I AM THE BIGGGGGGGGGGGGEST PERSON");
// console.log(friendsname);

function megaFriends(str) {
    var array = str.split(" ");
    var maxLength = array[0].length;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maxLength){
            maxLength = array[i].length;
            var maximum = array[i];
        } 
    }
    return maximum;
}
var friendsname = findLongestWord("hELLO EVERYONE, I AM THE BIGGGGGGGGGGGGEST PERSON");
console.log(friendsname);

