function  toDo(){
    const love = 'I love her unconditionally';
    console.log(love);
}
toDo();

function getFullName(firstName,lastName){
    let fullName = '';
    for(let i = 0; i <arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName +' '+ namePart;
    }
    return fullName;

}
const name = getFullName("Quazi","Mohammad","Nazmul","Huda","Rimon");
console.log(name);