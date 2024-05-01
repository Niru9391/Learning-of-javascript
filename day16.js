const num =[1,2,3,4,5,6,7,8,9,10]//foreach not returned
//Filter Operation
/*
const num1=num.filter((item)=>{//Filter return the value
    //console.log(item)
   return item>3
})
console.log(num1)
*/
/*
const newname=[]
num.forEach((item)=>{
    if(item>3){
        newname.push(item)
    }
})
console.log(newname)
*/
/*
const books = [
    {
      title: "The Shadow of the Wind",
      genre: "Mystery",
      publisher: "Penguin Random House"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publisher: "HarperCollins"
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      genre: "Fantasy",
      publisher: "Bloomsbury Publishing"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publisher: "Houghton Mifflin Harcourt"
    },
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publisher: "Scribner"
    }
  ];
  const userremark = books.filter((book)=>{
    return book.genre ==='Fiction'
  })

  console.log(userremark)
  */
 /*

 const nn =num.map((n)=>{
    return n+10

 })
 console.log(nn)
 */
/*
//Chaining
const newnum=num.map((n)=>{
   return n*10
}
).map((nn)=>{
    return nn+1

}).filter((item)=>{
    return item>20
})
console.log(newnum)
*/

const nums =[1,2,3]
const my =nums.reduce((acc,curvalue)=>{
    console.log(`acc:${acc} and curr:${curvalue}`)
    return acc+curvalue

},0)
console.log(my)
