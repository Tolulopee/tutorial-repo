import React, {useEffect, useState} from "react";




// Create Our root component => App component
 function App(){

  const [count,setCount] = useState(0);

  //Define use effect hook...
  useEffect(() =>{
    //Do something...
    if(count > 0){
      console.log("Count", count)
    }
  }, [count])


  //Define our click handler...
  const clickHandler = (event) => {
    setCount((prevCount) => prevCount + 1)

  }
  return <section className="main-container">
    <h1>Hello There</h1>
    <button onClick={clickHandler}>Click me</button>
  </section>
 }

//Export our App component

export default App;