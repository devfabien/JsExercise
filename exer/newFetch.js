// async function fet(url){
//     try{
//    return fetch(url).then((data)=>data.json()).then((vl)=>{return vl.filter(el=>el['name'].charAt(1)=="e")})
//     }
//     catch{

//     }
// }
// fet('https://jsonplaceholder.typicode.com/users').then((dd)=>console.log(dd))

//  function fet(url){

// // }


const fetchPromise=(url) =>{
    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    const timeoutId = setTimeout(() => {
        abortController.abort(); 
        console.log('Fetch request aborted due to timeout.');
      }, 10);
    return fetch(url, { signal: abortSignal });

 }

fetchPromise('https://jsonplaceholder.typicode.com/users').then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Fetch request was aborted.');
    } else {
      console.error('Error:', error);
    }
  })
 

