import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './componenets/AddTodo'
import Todos from './componenets/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
