import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as motion from "motion/react-client"
import TrackElementWithinViewport from './Scroll'
//import Parallax from './Parallax'
//<Parallax/>
// <a href="https://vite.dev" target="_blank">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
// <a href="https://react.dev" target="_blank">
//   <img src={reactLogo} className="logo react" alt="React logo" />
// </a>


function CoolButton()
{
  return (
    <motion.button
      className="CoolButton"
      style={box}
      // animate={{ rotateX: 60 }}
      // transition={{ duration: 0.5 }}

      >
      <div className="buttonText">Succesfully Aligned Text</div>
      <div className="buttonImage"><img src={viteLogo} className="buttonImage" alt="Vite logo" /></div>
      
    </motion.button>
  )
}

function Rotate() {
    return (
        <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        />
    )
}
const box = {
   
    width: 140,
    backgroundColor: "#ff0088",
    borderRadius: 1,
}






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CoolButton/>
      <div className="PortfolioTable">
        <div><TrackElementWithinViewport/></div>
        <div><TrackElementWithinViewport/></div>
        <div><TrackElementWithinViewport/></div>
      </div>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
