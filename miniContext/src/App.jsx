import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import  './App.css'

function App() {
 
  return (
    <UserContextProvider>
      <Login/>
      Context API
      <Profile/>
    </UserContextProvider>
  )
}

export default App
