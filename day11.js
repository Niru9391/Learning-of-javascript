//Function
/*
function Nameoffunction(){
    console.log("Hello")
}
Nameoffunction()//way to call the function
*/
/*
function sum(a,b){
    console.log(a+b)
}
 let result = sum(3,2)
 console.log(result)//output will be undefined
sum(3,null)
*/
/*
function sum(a,b){
    return (a+b)
}
let result = sum(8,8)
console.log(result)
*/
/*
function welcome(username){
    console.log(`hello,${username}`)
}
welcome("niru")
*/
/*
function calculateCartPrice1(...num1){//rest operator
    return num1

}
function calculateCartPrice2(val1,val2,...num1){//rest operator
    return num1

}
console.log(calculateCartPrice1(8,6,7,8,9,10))
console.log(calculateCartPrice2(8,6,7,8,9,10))
*/
/*
const user ={
    username:"Niru",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)//Object pass
*/
/*
const myNew =[1,2,3,4,5]
function passTheAarray (getarray){
    return getarray[4]

}
console.log(passTheAarray(myNew))
*/
//*************** */ABOUT GLOBAL AND LOCAL  SCOPE VARIABLE//*********************** */
//nested scope
function one(){
    const username = "Niru"
    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website)//const and let is scope variable
   two()
}
one()