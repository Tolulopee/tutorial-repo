import React, {useEffect, useState} from "react";




// Create Our root component => App component
 function App(){

  //Define use effect hook...
  useEffect

  const [count, setCount] = useState(8);
  return <section className="main-container">
    <h1> Count:{count}</h1>
    <button onClick={() =>setCount= count+1}>Increment</button>
  </section>
 }

//Export our App component

export default App;