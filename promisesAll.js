const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('First promise resolved after 1 second');
    },1000);
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('second promise resolve after 2 second');
    },2000);
});

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('third promise resolved after 3 second');
    },3000);
});
Promise.all([promise1,promise2,promise3])
.then((message)=>{
    console.log('All promises resolved:');
    message.forEach((message,index)=>{
        console.log(`Promise ${index+1}:${message}`);
    });

})
.catch((error)=>{
    console.error('One of the promises rejected:', error);
});