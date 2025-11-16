const fastPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(' fast promise resolved')
    },1000);
});
const mediamPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(' medium promise resolved')
    },2000);
});
const slowPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('slow promise resolved')
    },3000);
});
Promise.race([fastPromise,mediamPromise,slowPromise])
.then((message)=>{
    console.log("First resolved promise:",message);
})
.catch((error)=>{
    console.error('promise rejected',error);
})