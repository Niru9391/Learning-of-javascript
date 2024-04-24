//Date and Time
/*
mydate=new Date()//data type object
console.log(mydate.toString())//convert into string
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
*/

/*
let mycreatedate = new Date("2023-01-14")
console.log(mycreatedate.toLocaleString())
*/


let timestamp = Date.now()

console.log(timestamp)//In millisecond
console.log(Math.floor(timestamp/1000))//Convert into second

console.log(new Date().getMonth())

