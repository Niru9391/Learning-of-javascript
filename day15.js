//while and Do while loop
//nhi hoga
/*
let score =1
do {
console.log(score)
score++;
    
} while (score<=10);
*/
//HIGH order loop
//for of loop
/*
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i)
    
}
const greeting = "Hello world"
for (const a of greeting) {
    console.log(a)
    
}
*/
//Map
/*
const map = new Map()
map.set('a',"India")
map.set('b',"bihar")
map.set('c',"america")
//console.log(map)
for (const [i,value] of map) {
    console.log(i,'->',value)
}
const object  ={
    a:'b',
    c:'d'
}
*/
/*
const object ={
    js:'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby'
}
for (const key in object) {
    console.log(object[key])//access the key value of object
   
}
*/
/*
const programming =["js","rb","py"]
for (const key in programming) {
  console.log(programming[key])
}*/
const coding =["js","rb","py","cpp"]
/*
coding.forEach((item)=>{
    console.log(item)

})
*/
/*
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)

})
*/
const mycoding = [{
    langu:'javascript',
    filename:'js'
},{
    langu:'java',
    filename:'java'
},
{
    langu:'c++',
    filename:'cpp'
},
]
mycoding.forEach((item)=>{
console.log(item.filename)
})