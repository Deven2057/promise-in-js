let p1 = new Promise((resolve, reject) => {
  console.log("promise is pendding")
  setTimeout(()=>{
    // console.log("I am a promice and i am resolve")
    resolve(true)
   
  },5000)
})

let p2 = new Promise((resolve, reject) => {
  console.log("promise is pendding")
  setTimeout(()=>{
    // console.log("I am a promice and i am rejected")
    reject(new Error("i am error"))
  },5000)
})
p1.then((value)=>{
  console.log(value)
})

p2.catch((error)=>{
  console.log("some error occured in p2")
})
