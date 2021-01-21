let total = 0;
let n = 10;
for(let i=0; i<=n; i++){
    total = total +i;
}
console.log(total); 

function sum(n){
    if(n===0){
        return 0;
    }
    else{
        return sum(n-1) +n;
    }
}
console.log(sum(3));