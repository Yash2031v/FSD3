//promise js
const promise=new Promise(resolve,reject=>{
    let success=true;
    if(success){
        resolve("opertion successfull");
    }
    else{
        reject("opertion failed");
    }
});
promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})

//promise chain.js
function step1(){
    return Promise.resolve(10);
}