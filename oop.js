/*const user={
    username:"Niru",
    logIncount:6,
    singIN:true,
    getuserdetails:function(){
        //console.log("its 4:46")
        //console.log(`username:${this.username}`)
        console.log(this)//current context
    }
}
console.log(user.getuserdetails())
---object literal
*/
//const promiseOne=new Promise()//new keyword is constructor function
function user(username,logIncount,Isloggedin){
    this.username=username,
    this.logIncount=logIncount,
    this.Isloggedin=Isloggedin
    return this
}
const user1 =new  user("N",8,true)

const user2 =new user("Niru",18,true)//user2 overwrite without new keyboard

console.log(user1)
