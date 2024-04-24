//ARRAY
//ARRAy of javascript resizable
//ARRAY CONTAIN different type of data together
//Array is an object
//shallow copy means same reference point
//deep copy means don't share the same reference

/*
const myarray =[1,3,"4",2]
myarray.push("banana", "apple", "peach");
console.log( myarray)
console.log(myarray.length)
myarray.pop()
console.log( myarray)
console.log(myarray.sort())//sort element according to dictionary
myarray.unshift(9)//added on 0th index
console.log(myarray)
myarray.shift()//remove 0th index
console.log(myarray)
console.log(myarray.includes(3))
console.log(myarray.indexOf(1))
const mynewarray = myarray.join()
console.log(mynewarray)//seperated by comma



//slice not manipulate original array
//splice manipulate original aray
*/

const marvel_heros =["Ironman","thor","spiderman"]
const dc =["superman","flash","batman"]
//marvel_heros.push(dc)
//console.log(marvel_heros)//take dc as object
/*
const newhero = marvel_heros.concat(dc)
console.log(newhero)
*/
/*
const allnewheros = [...marvel_heros,...dc]//spread operator
console.log(allnewheros)
*/
const newarray = [1,2,3,[1,2,3,["a","b",[2],["c"]]],[5]]
const realnewarra = newarray.flat(Infinity)
console.log(realnewarra)
