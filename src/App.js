import React, {createContext} from "react";


//create context for the app
const     AuthContext = createContext({
  isAuthenticated:false,
  user :{
    username:"tolulopekay",
    name:"Tolulope Kalejaiye",
    location:"Ikeja, Lagos"

  }
})


//Define context provider
function AuthProvider (props){
  return(
    <AuthContext.provider user ={{
      isAuthenticated:false,
  user :{
    username:"tolulopekay",
    name:"Tolulope Kalejaiye",
    location:"Ikeja, Lagos"

  },
     }}>
    {props.children}
    </AuthContext.provider>

  )
}


function UserProfile (){
  return(
    <AuthProvider>
      <section className="main-container">
        <UserProfile/>

      </section>
    </AuthProvider>
  )

}



const App = () => {



 return  ( <AuthProvider>
 <section className="main-container">
   <UserProfile/>
  </section>
  </AuthProvider>
 )
 }

//Export our App component

export default App;