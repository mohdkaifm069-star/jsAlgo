const errorPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('An error occurred');
    },1000);
});
errorPromise.then((message)=>{
    console.log(message);
})
.catch((error)=>{
  console.error('Error caught using then second parameter:',error);
});


