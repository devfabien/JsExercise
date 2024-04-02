async function fetchUserTodos() {

   const [usersResponse, todosResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/todos')
    ]);

    const users = await usersResponse.json();
    const todos = await todosResponse.json();
  
    const combinedData = users.map(user => {
      return {
        ...user,
        todos: todos.filter(todo => todo.userId === user.id),
      };
    });
  
    return await combinedData;
  }
fetchUserTodos().then((data)=>console.log(data)).catch(()=>console.log("erro"))



const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
]

const fetchUserTodos = async (endpoints) => {
    const result = [];
    for (const url of endpoints) {
        result.push(fetch(url))
    }
    const [res1, res2] = await Promise.all(result)
    const users = await res1.json()
    const todos = await res2.json()

    users.map(user => (user.todos = todos.filter(todo => todo.userId === user.id)))
    console.log(users)
}
fetchUserTodos(urls)



// let arr = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/todos",
//   ];
  
//   async function getFastPosts() {
//     const data = await Promise.all(
//       arr.map((url) => {
//         return new Promise((resolve) => {
//           fetch(url).then((res) => resolve(res.json()));
//         });
//       })
//     ) ;
//   const newData=await data.then((posts) => {
//         const [user, todos] = posts;
//         user.map(
//           (el) => (el.todos = todos.filter((todo) => todo.userId == el.id))
//         )[0];
//         return user;
//       })
//       return newData;
     
//   }
//   getFastPosts()
   
//     .then((res) => console.log(res));


// function getPost(){
// const fetchUserProfile = () => fetch('https://api.example.com/users/1').then(response => response.json());
// const fetchUserTodos = () => fetch('https://api.example.com/users/1/todos').then(response => response.json());

// const promises = [
//   fetchUserProfile(),
//   fetchUserTodos(),
// ];

// const allPromises = Promise.all(promises);

// allPromises.then(([userProfile, userTodos]) => {
//   // Combine the user profile and todos data
//   const combinedData = {
//     ...userProfile,
//     todos: userTodos,
//   };

//   // Do something with the combined data
// });

// }
