import React, {useState} from "react";





// Create Our root component => App component
 function App(){
  //create a state variable
  const[count, setCount]  = useState(0);

  //create a function to increment the count
  const increment = (event) => {
    event.prevDefault();
    setCount(prevCount => prevCount + 1);
  }

  //create a function to decrement the count
  const decrement = (event) => {
    event.prevDefault();
    setCount (prevCount => prevCount - 1)
  }



 return  <section className="main-container">
    <h1>Count:{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </section>

 }

//Export our App component

export default App;