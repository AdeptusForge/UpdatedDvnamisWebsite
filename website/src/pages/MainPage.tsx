//import { useState } from 'react'
import viteLogo from '/vite.svg'
import './MainPage.css'
import * as motion from "motion/react-client"
import Item from '../components/Scroll'
//import { Example } from '../components/Collapsible'
import '../components/Collapsible.css'
import Expandable from '../components/Expandable'
import HeaderBar from '../components/HeaderBar'


function MainPage() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className="HeaderCard">
    CURRENTLY UNDER RECONSTRUCTION

    </div>
    <div className="BackgroundImage"></div>
    <HeaderBar/>
    
    <div className="PortfolioTable">
      {/* <section className="PortfolioRow">
        <Expandable title="1"></Expandable>
        <Expandable title="2"></Expandable>
        <Expandable title="3"></Expandable>
      </section> */}
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="WAKE" image="WAKE_gif.gif" destination="testpage"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Strike Back" image="StrikeBackThumb.png"/></div>
        <Item title="DESCENT INTO HELLFORGE" image="descent.jpg"/>
      </section>
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="CODENAME: Blazer" image="evidencegif.gif"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Burger Flippant" image="BurgerFlippant.gif"/></div>
        <Item title="DBFZ: KAI" image="websitekai.png"/>
      </section>
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="Omegatech: Aspen's Story" image="omegatech.png"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Avagard's Study" image="LevelDesignProject.png"/></div>
        <Item title="DESCENT INTO HELLFORGE" image="redsun.png"/>
      </section>
      </div>
    </>
  )
}
export default MainPage