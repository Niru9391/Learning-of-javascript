/*
//Promise created
const promise1 =new Promise(function(resolve,reject){
    //do an async call
    //DB calls,cryptography
    setTimeout(function(){
        console.log("Asynch task complete")
        //connect .then and function
        resolve()
    },1000)

})
//Promise cosume
promise1.then(function(){
    console.log("Promise is  consumed")
})
    */
   /*
   new Promise(function(resolve,reject){
    setTimeout(() => {

        console.log("Created another promises")
        resolve()
        
    }, 10000);
   }).then(function(){
    console.log("promise is consumed another time")
   })
    */
   /*
   const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Niru",email:"niru@gmail.com"})

    },1000)
   })
   promise3.then(function(user){
    console.log(user)

   })*/
  /*
  const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Niru",email:"niru@gmail.com"})
        }
        else{
            reject('Error:something went wrong')
        }
    }, 2000);
  })
promise4
.then((user)=>{
    console.log(user)
    return user.username

  }).then((username)=>{
    console.log(username)

  }).catch(function(error){
    console.log(error)

  }).finally(()=>{
    console.log("promise either resolved aur reject")
  })
    */
   const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"JS",pass:"123"})
        }
        else{
            reject('Error:everything went wrong')
        }
    }, 200);
   })
   async function consumepromise5(){//it does not direct handle error.
  try{
    const response = await promise5
    console.log(response)
  }
  catch(err){
    console.log(err)

  }
   }
   consumepromise5()


   