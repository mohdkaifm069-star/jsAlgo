function failed()
{
        return new Promise((resolve,reject)=>{
                reject('some thing went wrong:');
        });
}
async function run()
{
        try{
                await failed();
        } catch(err)
        {
                console.log("cought erroe:",err)
        }
}
run();