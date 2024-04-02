 async function createAlarm(name,sec){
    return await new Promise((resolve,reject)=>{
        if(sec>1){
            resolve(`Wake up ${name} `)
        }else{
            reject(`Delay is not sufficient`)
        }
    }).then((value)=>setTimeout(()=>console.log(value),sec*1000)).catch((err)=>console.log(err))
}

createAlarm("fab",2);