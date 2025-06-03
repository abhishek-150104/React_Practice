import { useCallback, useState,useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed,setCharAllowed] = useState(false);

  const [password,setPAssword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"

    if(charAllowed) str += "!@#$%&*?"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)
    }
    setPAssword(pass);
  },
  [length, numberAllowed, charAllowed, setPAssword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();

  //Use to set selection range
  // passwordRef.current?.setSelectionRange(0,8)
  window.navigator.clipboard.writeText(password)
},[password])
  //is run whenever their is change in dependecies
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  //useRef

  const passwordRef = useRef("")


  return (
    <>
    <div className='w-full h-screen bg-blue-900 px-4 py-3'>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-900 '>
      <h1 className='text-center'
      >Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4' > 
          <input type="text" value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}/>
          <button
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-600 px-3 py-1 text-white shrink-0 transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 flex-wrap'>
        <div className='flex flex-wrap titems-center gap-x-1'>
          <input type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}

          />
          <label htmlFor="">Length:{length}</label>
          <div className="flex items-center gap-x-1 ">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e)=>{setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={(e)=>{setCharAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput">Character</label>
          </div>
          
          

        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
