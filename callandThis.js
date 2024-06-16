function setUsername(userName){
    this.userName=userName
    console.log("called")
}
function createUser(userName,email,password){
    setUsername.call(this,userName)

    this.email=email
    this.password=password

}
const chai = new createUser("Niru","ni@gmail.com","123")
console.log(chai)