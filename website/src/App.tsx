import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import * as motion from "motion/react-client"
import Item from './Scroll'
//import Parallax from './Parallax'
//<Parallax/>
// <a href="https://vite.dev" target="_blank">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
// <a href="https://react.dev" target="_blank">
//   <img src={reactLogo} className="logo react" alt="React logo" />
// </a>


function HeaderButton()
{
  return (
    <motion.button
      className="HeaderButton"
      style={box}
      >
      <div className="buttonText">Succesfully Aligned Text</div>
      <div className="buttonImage"><img src={viteLogo} className="buttonImage" alt="Vite logo" /></div>
      
    </motion.button>
  )
}

const box = {
    borderRadius: 1,
    paddingLeft:40,
    paddingRight:40
}


// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.tsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="HeaderBar">
      <HeaderButton/>
      <HeaderButton/>
      <HeaderButton/>
    </div>
    <div className="PortfolioTable">
      <section className="PortfolioRow">
        <Item title="Hello"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
        </div><Item title="Goodbye"/></div><Item title="Dog"/>
      </section>
      <section className="PortfolioRow">
        <Item title="Hello"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
        </div><Item title="Goodbye"/></div><Item title="Dog"/>
      </section>
      <section className="PortfolioRow">
        <Item title="Hello"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
        </div><Item title="Goodbye"/></div><Item title="Dog"/>
      </section>
            <section className="PortfolioRow">
        <Item title="Hello"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
        </div><Item title="Goodbye"/></div><Item title="Dog"/>
      </section>
            <section className="PortfolioRow">
        <Item title="Hello"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
        </div><Item title="Goodbye"/></div><Item title="Dog"/>
      </section>
            <section className="PortfolioRow">
        <Item title="Hello"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
        </div><Item title="Goodbye"/></div><Item title="Dog"/>
      </section>
      </div>
    
    </>
  )
}

export default App
