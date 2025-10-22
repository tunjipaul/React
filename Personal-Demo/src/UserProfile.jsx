import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("Chidi");
  const [age, setAge] = useState(25);
  const [city, setCity] = useState("Lagos");
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserProfile;

// state with different data types

//Boolean.
const [isLoggedIn, setIsloggedIn] = useState(false);
//Array
const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
//Object
const [user, setUser] = useState({ name: "Ada", age: 30 });

function Button(){
    return( 
        <div>
            <button onClick={() => alert("Clicked!")}>Click Me!</button>
    <button></button>
        </div>
    


)
    
}