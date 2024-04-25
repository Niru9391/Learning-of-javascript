//OBJECTS
//songleton (object declared method)
//objects literal (object declared method)
/*
const mysymb = Symbol("key1")//symbol
const just ={
    fname :"Niru",
    [mysymb]:"keys1",//add symbol to objects
    lname:"b",
    age:18,
    location:"nhi batayeng",
    email:"kyo bataye",
    dist:["AB","an"]

} //object

console.log(just)
console.log(just.lname)//access value
console.log(typeof(just[mysymb]))//string
console.log(just["lname"])//access value
just.email ="niranja"
console.log(just.email)


//Object.freeze(just)//freez the objects(stop the change in objects)


just.email ="niranjan"
console.log(just.email)
just.greeting = function(){
    console.log(`hello bhai,${this.fname}`)//access the object properties using "this."
}
console.log(just.greeting())
*/
//songleton (object declared method)
//const tinderdata =  Object()
/*
const tinder ={}
tinder.id ="1234"
tinder.user ="niru"
tinder.islogin =false

//console.log(tinder)

const regularuser = {
    emai:"niru",
    fname:{
        lname:{
            a:"a"
        },
        b:"b"
    }
}
//console.log(regularuser.fname.lname)

const bject1 ={
    keys:"1",
}
const bject2 ={
    key:"2",
}
const bject4=Object.assign({},bject1,bject2)//add two object

const bject3={...bject1,...bject2}//add two object using spread operator
console.log(bject4)
console.log(bject4)
*/



//Object destructure

const course = {
    course:"math",
    price:999,
    courseInstructor:"Niranjan"
}
const {courseInstructor} = course//Object destructure
const {courseInstructor:hehe} = course//another way to destructure
console.log(courseInstructor)
console.log(hehe)




