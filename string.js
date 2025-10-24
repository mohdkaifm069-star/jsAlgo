const colors = ["red", "green", "blue"];
colors.push("yellow")
let index=colors.indexOf("green")
if(index!==-1)
{
    colors.splice(index,1);
}
console.log(colors)