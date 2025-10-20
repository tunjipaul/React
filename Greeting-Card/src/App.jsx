import Greeting from "./GreetingCard";
import './App.css';

function App(){
    return(
        <div>
            <Greeting name="TunjiPaul" age={23} color= "purple" />
        </div>
    )
}

export default App;