
// setTimeout(()=>{let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>console.log("time"),0)
//     console.log("new");
//     resolve()})
//     promise.then(()=>console.log("resolve"))},0)

// setTimeout(function(){
//     console.log(this)
// },0)
// setTimeout(function(){
//     ()=>{
//         console.log(this)
//     }
// },0)
// setImmediate(()=>console.log("immediate"))
// let promise=new Promise((resolve,reject)=>{
//     console.log("new");
//     resolve()})
// promise.then(()=>console.log("resolve"))
// Promise.resolve().then(()=>console.log("promise"))
// const button=document.getElementById("button");
// button.addEventListener("click",()=>{
    //     console.log("event")
    // })
    // button.click()
    // console.log("log")


    // async function createAlarm(name,sec){
    //     return await new Promise((resolve,reject)=>{
    //         if(sec>1){
    //             setTimeout(()=>resolve(`Wake up ${name} `),sec*1000)
                
    //         }else{
    //             reject(`Delay is not sufficient`)
    //         }
    //     })
    // }
    
    // createAlarm("fab",2).then((val)=>console.log(val)).catch((err)=>console.log(err))





    function* asyncGenerator() {
        const result = yield someAsyncOperation();
        console.log(result);
      }
      
      const generator = asyncGenerator();
      const promise = generator.next().value;
      promise.then((result) => {
        generator.next(result);
      });
      function someAsyncOperation(){
        return "test"
      }