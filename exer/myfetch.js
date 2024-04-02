function myFetch(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open('GET', url);
      xhr.send();
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error('Failed to fetch resource: ' + url));
        }
      };
  
      xhr.onerror = function() {
        reject(new Error('Error fetching resource: ' + url));
      };
    });
  }
  myFetch('https://jsonplaceholder.typicode.com/users').then((data)=>console.log(data)).catch((err)=>console.log(err))