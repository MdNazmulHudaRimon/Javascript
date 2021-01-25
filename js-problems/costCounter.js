function hotelCost(stayingTime){
    var finalCost = 0;
    if(stayingTime<=10){
        finalCost = stayingTime * 100;
    }
    else if(stayingTime<=20){
        var firstTenDays = 10 * 100;
        var remainingDays  =  stayingTime - 10;
        var moreThanTen =  remainingDays * 80;
        finalCost = firstTenDays + moreThanTen;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = stayingTime - 20;
        var moreThanTwenty = remainingDays  * 50;
        finalCost = firstTenDays + secondTenDays + moreThanTwenty;
    }
    return finalCost;
}
var totalcost = hotelCost(5);
console.log(totalcost);
aaaaa

addEventListenera
addEventListenera
aaaaaa
a
aaaaaa


aaaaa
