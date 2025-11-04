let arr=[12,4,5,3,6,45,14];
let result=[];
for(i=0; i<=arr.length; i++)
{
  for(j=i+1; j<=arr.length; j++)
  {
    if(arr[i]>arr[j])
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        
    }
  }
  result.push(arr[i]);

}
console.log(arr);