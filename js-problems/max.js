var buisnessMan = 100000;
var minister = 5000;
var sochib = 30000;
if (buisnessMan>minister && buisnessMan>sochib){
    console.log("Buisnessman is richer than fokir chor minister and sochib");
}
else if(minister>sochib && minister > buisnessMan){
    console.log("Minister is richer than buisnessman and sochib")
}
else{
    console.log("Sochib is richer than buisnessman and minister");
}

//boom we have done this but we can do this using simple one line code 
//let's try it 
 var max = Math.max(buisnessMan,sochib,minister);//with this simple one line we can easily find out the max value
 console.log(max);






 var a = 10;
 var b = 200;
 var c = 30;
// > greater  than => greater than or equal < =<
 if(a>b && a>c){
     console.log("a is bigger");
 }
 else if(b>c && b>a){
     console.log("b is bigger");
 }
 else{
     console.log(" c is bigger");
 }


 var max1 = Math.max(a,b,c);
 console.log(max1);