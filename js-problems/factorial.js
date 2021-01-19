function factorial(num) {
    var factorial = 1;
    for (let i= 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(10);
console.log(result);
console.log(factorial(5));