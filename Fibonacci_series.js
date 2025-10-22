let a=0;
let b=1;
let n=10;
console.log(" Fibonacci Series")
for(i=0; i<=n; i++)
{
    console.log(a)
    let temp=a+b;
    a=b;
    b=temp;
}