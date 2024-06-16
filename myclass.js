class user{
    constructor(userName,email,password){
        this.userName=userName
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.userName.toUpperCase}`
    }
}
const chai = new user("n","G@123","123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

//Behind the scene
    