function explainCallback(name,age,task){
    console.log("Hello ",name);
    console.log("Your age is ",age);
    task();
}
function washHand(){
    console.log("Wash hand with soup");
}
function takeShower(){
    console.log("Sauuar pola gosol kor");
}
function beshiBokos(){
    console.log("Chup kor sala eto kotha na koia");
}
explainCallback("Rimon", 20 , washHand );
explainCallback("Rifat", 18 , takeShower );
explainCallback("Mc",20,beshiBokos);