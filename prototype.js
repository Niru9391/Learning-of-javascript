/*
function multiples(num){
    return num

}
console.log(multiples(4))
console.log(multiples.power)
console.log(multiples.prototype)
*/
/*
function createuser(username,score){
    this.username=username
    this.score=score

}
createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.printme = function(){
    console.log(`${this.score}`)
}
const ghar =new createuser("Gawn",100)
const vill =new createuser("vill",10)
ghar.printme()
*/
///Prototype
let myheros =["A","B"]
let hero = {
    A:"IRON",
    B:"copper",
    getBpower: function(){
        console.log(`B power is ${this.B}`)
    }
}

Object.prototype.Niru = function(){
    console.log(`hero is present in all object`)
}

//hero.Niru()
Array.prototype.Ni=function(){
    console.log(`hey`)
}
myheros.Niru()
myheros.Ni()