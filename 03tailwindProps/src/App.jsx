import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name:"Abhishek"
  }
  return (
    <>
      <h1 className ='bg-green-400 text-black rounded-xl m-4'>Tailwind css</h1>
      <Card  uname = "Abhishek" image = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>

      <Card uname = "Parth" image= "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
      

    </> 
  )
}

export default App
