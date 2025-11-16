const promiseA=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promise A reject:');
    },1000);
})

const promiseB=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise B resolve:');
    },2000);
})

const promiseC=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise C resolve:');
    },3000);
})

Promise.any([promiseA,promiseB,promiseC])
.then((message)=>{
    console.log(' first promise fullfiled:',message);
})
.catch((error)=>{
    console.error('All promise were rejected',error);
})