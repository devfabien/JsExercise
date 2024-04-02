// function runAfterTime(delay,message){
// return new Promise((resolve,reject)=>{
//     if(typeof delay==='number'){
//    setTimeout(()=>resolve(`${message} ${delay}`),delay)
//     }else{
//    setTimeout(()=>resolve(message),1000)
//     }
// })
// }
// runAfterTime(5000,"welcome").then((result)=>console.log(result))


// function getData(url){
//  return new Promise((resolve,reject)=>{
//     resolve(fetch(url).then((data)=>data.json()))
//  })
 

// }

// getData('https://jsonplaceholder.typicode.com/todos/1j').then((data)=>console.log(data)).catch((error)=>console.log(error))


function fetchLoop(urls){
    const fetchs=[];
    for(let url of urls){
        fetchs.push(fetch(url))
    }
    
//     const fetchs=urls.map((link)=>fetch(link))
// return Promise.all(fetchs).map((url)=>url.then((dd)=>setTimeout(()=>dd.json())).catch((err)=>"unsuccessful"))
}
fetchLoop(['https://dummyjson.com/todos/1','https://jsonplaceholder.typicode.com/todos/1']).then((data)=>console.log(data)).catch((err)=>console.log(err))
