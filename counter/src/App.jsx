import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let value = 0

  // const addValue = () =>{
  //   value +=1;

  //   document.getElementById('inc').innerHTML=value;
  // }

  // const decreaseValue = () =>{
  //   value -= 1;
  //   document.getElementById('inc').innerHTML=value;
  // }

  //Lets use hook

  const [counter, setCounter] = useState(0);

  const addValue = () =>{
    setCounter(counter + 1)
  }

  const decreaseValue = () =>{
    setCounter(counter - 1)
  }


  return (
    <>

      <h1>Counter</h1>
      <h3 id='inc'>Value:{counter}</h3>
      <button onClick={addValue}> Increase </button>
      <br />
      <br />
      <button onClick={decreaseValue}> Decrease </button>


    
    </>
  )
}

export default App
