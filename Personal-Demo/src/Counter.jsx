// //using statehook.

// import { useState } from "react";

// function Counter(){
//     //declare state variable.

//     const[count, setCount] = useState(0);

//     function increment() {
//         setCount(count + 1); //update state
//     }

//     return(
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// }

// export default Counter;

// //count is the initial value and the setcount is used to update it but its best practice to use the prevCount function instead of putting just setCount