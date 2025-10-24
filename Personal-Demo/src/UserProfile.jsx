import { useState } from "react";

// const { useState } = require("react");

// function UserProfile() {
//   const [name, setName] = useState("Chidi");
//   const [age, setAge] = useState(25);
//   const [city, setCity] = useState("Lagos");
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>City: {city}</p>
//     </div>
//   );
// }

// export default UserProfile;

// // state with different data types

// //Boolean.
// const [isLoggedIn, setIsloggedIn] = useState(false);
// //Array
// const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
// //Object
// const [user, setUser] = useState({ name: "Ada", age: 30 });

// function Button(){
//     return( 
//         <div>
//             <button onClick={() => alert("Clicked!")}>Click Me!</button>
//     <button></button>
//         </div>
    


// )
    
// }

// function Counter(){
//   const[count, setCount] = useState(0);
//   function increment(){
//     setCount(prevCount => prevCount + 1);
//   }
//   return <button onClick={increment}>Count: {count}</button>;
// }

// export default Counter;

// function UserProfile(){
//   const[user, setUser]  = useState({
//     name: 'chidi',
//     age: 25,
//     city: 'lagos'
//   });
//   function updateCity() {
//     setUser({
//       ...user, //spread existing properties.
//       city: 'Abuja'
//     });
//   }
//   return <button onClick={updateCity}>Move to Abuja</button>;
// }

// // export default UserProfile;

// //updating arrays.

// function TodoList(){
//   const [todos, setTodos] = useState(['Learn React', "Build projects"]);
//   function addTodo() {
//     setTodos([...todos, 'New Todo']);
//   }
//   function removeTodo(index){
//     setTodos(todos.filter((_, i) => i !== index));
//   }
//   return(
//     <div>
//       {todos.map((todo, index) =>
//       (
//         <div key={index}>
//            {todo}
//            <button onClick={() => removeTodo(index)}>Delete</button>
//         </div>
//       ))}
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//   )
// }



function Child({name, age}){
   const[isHappy, setIsHappy] = useState(true);
   return(
    <div>
      <p>Name: {name}</p> 
      <p>Age: {age}</p>
      <p>Happy: {isHappy ? 'Yes' : 'No'}</p>
      <button onClick={() => setIsHappy(!isHappy)}>Toggle Mood</button>
    </div>
   )
}
export default Child;