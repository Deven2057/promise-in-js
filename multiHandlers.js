let p1 =new Promise((resolve,reject)=>{
  console.log("hey i am not resolved")
  setTimeout(()=>{
    resolve(1);
  },2000)
})

p1.then(()=>{
  console.log("congratulations this promise is now resolved")
})
p1.then(()=>{
  console.log("hurrey")
})
