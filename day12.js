//Arrow function
//this keywoed means current context
/*
const user ={
    username:"Niru",
    price:988,
    welcome:function(){
        console.log(`Hello,${this.username}`)
        console.log(this)

    }
}

user.welcome()
user.username="Avi"
user.welcome()

console.log(this)
*/
/*
function roti(){
    let usrname = "Niru"
    console.log(this.usrname)
}
roti()
*/
/*
const chai = ()=>{//arrow function
    console.log("Niru")
    console.log(this)
}
chai()
*/
/*
const add =(a,b)=>{
    return a+b

}
console.log(add(5,6))
*/
/*
const add =(a,b)=>   (a+b)//expicit function
console.log(add(55,6))

*/
//IIFI(Imediately Invoked Function Expression)
(function chai(){
    console.log("database connected")
})()
//IIFI is used to remove the pollution of global variable

