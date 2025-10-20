function Greeting(props){
    return(
        <div className="greeting">
            <h1>Hello {props.name}</h1>
            <p>You are {props.age} years old!</p>
            <p>Favorite Color: {props.color}</p>
        </div>
    )
}

export default Greeting;