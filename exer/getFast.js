// let promise1= fetch('https://dummyjson.com/posts').then((data)=> "promise1")
// let promise2= fetch('https://this-may-not-exist.com/posts').then((data)=> "promise2")
// let promise3= fetch('https://jsonplaceholder.typicode.com/posts').then((data)=> "promise3")


//    Promise.any([promise1,promise2,promise3]).then((els)=>console.log("elemets",els)).catch(()=>console.log("err"))
async function getPost(){
return fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET', headers:{
   Accept:"text/plain"
}}).then(async (data)=>await data.text())

}


getPost().then((vl)=>console.log(vl)).catch(()=>console.log("err"))