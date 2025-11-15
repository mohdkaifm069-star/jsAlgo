const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved after 2 second.');
    },2000);
})
myPromise.then((message)=>{
    console.log(message);
})