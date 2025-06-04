//import { useState } from 'react'
import viteLogo from '/vite.svg'
import './MainPage.css'
import * as motion from "motion/react-client"
import Item from '../components/Scroll'
//import { Example } from '../components/Collapsible'
import '../components/Collapsible.css'
//import Parallax from './Parallax'
//<Parallax/>
// <a href="https://vite.dev" target="_blank">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
// <a href="https://react.dev" target="_blank">
//   <img src={reactLogo} className="logo react" alt="React logo" />
// </a>


function HeaderButton({buttonText="", image="", destination="https://www.dvnamis.games"})
{
  return (
    <motion.button
      onClick={() => window.open(destination,"_self")}
      className="HeaderButton"
      style={box}>
      <div className="buttonText" hidden={buttonText==""}>{buttonText}</div>
      <div className="buttonImage" hidden={image==""}>
        <img className="buttonImage" src={image}/></div>
      
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

// window.onscroll = function() {StickyHeader()};
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function StickyHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


function MainPage() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className="HeaderCard"></div>
    <div className="HeaderBar" id="myHeader">
      <HeaderButton buttonText="" image={viteLogo}/>
      <HeaderButton buttonText="ABOUT" destination="about"/>
      <HeaderButton buttonText="RÉSUMÉ" destination="resume"/>
      <HeaderButton buttonText="CONTACT" destination="resume"/>
    </div>
    {/* <section className="PortfolioRow">
      <div className="VerticalCollapsibleContainer"><Example/></div>
      
    </section> */}


    <div className="PortfolioTable">
      <section className="PortfolioRow">
        <Item title="WAKE" image="WAKE_gif.gif" destination="/TestPage"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Strike Back" image="StrikeBackThumb.png"/></div>
        <Item title="DESCENT INTO HELLFORGE" image="descent.jpg"/>
      </section>
      <section className="PortfolioRow">
        <Item title="CODENAME: Blazer" image="evidencegif.gif"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Burger Flippant" image="BurgerFlippant.gif"/></div>
        <Item title="DBFZ: KAI" image="websitekai.png"/>
      </section>
      <section className="PortfolioRow">
        <Item title="Omegatech: Aspen's Story" image="omegatech.png"/>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Avagard's Study" image="LevelDesignProject.png"/></div>
        <Item title="DESCENT INTO HELLFORGE" image="redsun.png"/>
      </section>
      </div>
    </>
  )
}
export default MainPage