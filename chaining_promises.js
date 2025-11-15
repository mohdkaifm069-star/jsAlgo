const firstPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('first promise resolve.')
    },1000);
});

const secondPromise=firstPromise.then((message)=>{
    console.log(message)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('second promise resolved');
        },2000)
    });
});
secondPromise.then((message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('third promises resolved');
        },3000)
    });
})

.then((message)=>{
   console.log(message)
})