import React, {createContext} from "react";


//create context for the app
const authContext = createContext()


function UserProfile (){
  return(
    <div>
      <h1>User Profile</h1>
      <div>Username: tolulopekay</div>
      <div>Name:Kalejaiye Tolulope</div>
      <div>Location: Ikeja,Lagos</div>
    </div>
  )

}



const App = () => {



 return  <section className="main-container">
   <UserProfile/>
  </section>

 }

//Export our App component

export default App;