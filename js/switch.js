// let's learn about switch and break statement
// we use switch and break statement if we have too many conditons 
var number = 300;
switch (number) {
    case 1000:          //here it will check if the value is 1000, if it's not then it won't execute
        console.log("I am towhid afridi");
        break;
    case 500:          //here it will check if the value is 500, if it's not then it won't execute
        console.log("Amio boroloker pola");
        break;
    case 300:          //here it will check if the value is 300, if it's not then it won't execute
        console.log("ami moddhobitto bhai");
        break;
    case 200:         //here it will check if the value is 200 or 100, if it's not then it won't execute
    case 100:
        console.log("ami nimno moddhobittto bhai");
        break;
    default:
        console.log("bhaia tmi ke ami cinina,sorry bhaia");
}