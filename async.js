function wait(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
} 
async function run()
{
    await wait(3000);
    console.log('Done');
}
run();
    
