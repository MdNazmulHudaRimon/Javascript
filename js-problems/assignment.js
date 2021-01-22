function kilometerToMeter(km){
    var meter = km * 1000;
    return  meter;
}
var result =  kilometerToMeter(10);
console.log(result);

// watch = 50, phone = 100, laptop = 500;
function budgetCalculator(watch,phone,laptop){
    let watchPrice = watch * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;
    var result = watchPrice + phonePrice + laptopPrice;
    return result;
}
var finalCost = budgetCalculator(10,20,1);
console.log(finalCost);

// 2nd finished