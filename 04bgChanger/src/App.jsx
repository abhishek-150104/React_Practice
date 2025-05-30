import { useState } from "react"

function App() {
  let [color, setColor] = useState("olive")
  


  return (
     <div className="w-full h-screen duration-200"
     style ={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl"> 
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}} onClick = {()=>setColor("Red")}>Red</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"blue"}} onClick = {()=>setColor("Blue")}>Blue</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Gray"}} onClick = {()=>setColor("Gray")}>Gray</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"green"}} onClick = {()=>setColor("Green")}>Green</button>
          <button id="" className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Brown"}} onClick = {()=>setColor("Brown")}>Brown</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"black"}} onClick = {()=>setColor("Black")}>Black</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"olive"}} onClick = {()=>setColor("Olive")} >Olive</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Purple"}} onClick={()=>setColor("Purple")}>Purple</button>
        </div>
      </div>
     </div>
    

  )
}

export default App
