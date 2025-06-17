
//import { useState } from 'react'
import './MainPage.css'
//import * as motion from "motion/react-client"
import Item from '../components/Scroll'
//import { Example } from '../components/Collapsible'
import '../components/Collapsible.css'
//import Expandable from '../components/Expandable'
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'


function MainPage() {
  //const [count, setCount] = useState(0)

  return (
    <>


    <div className="BackgroundImage">
    <div className="HeaderCard">
    </div>
    <HeaderBar/>
    <div className="PortfolioTable">
      {/* <section className="PortfolioRow">
        <Expandable title="1"></Expandable>
        <Expandable title="2"></Expandable>
        <Expandable title="3"></Expandable>
      </section> */}
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="WAKE" subtitle="Level/Systems Designer & Build Master" image="WAKE_gif.gif" destination="wake"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="STRIKE BACK" subtitle="Technical Lead/Tool Developer" image="StrikeBackThumb.png" destination="strike_back"/></div>
        <Item title="DESCENT INTO HELLFORGE" subtitle="Level/Encounter Design" image="descent.jpg"  destination="descent_into_hellforge"/>
      </section>
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="CODENAME: Blazer" subtitle="Systems & Level Design & Programmer" image="evidencegif.gif" destination="codename_blazer"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Burger Flippant" subtitle="Systems Design & Programmer" image="BurgerFlippant.gif" destination="burger_flippant"/></div>
        <Item title="DBFZ: KAI" subtitle="Systems Design & Programmer" image="websitekai.png"  destination="dbfz_kai"/>
      </section>
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="Omegatech: Aspen's Story" subtitle="Level Design" image="omegatech.png" destination="omegatech"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Avagard's Study"  subtitle="Level Design & Graphics/Physics Programmer" image="LevelDesignProject.png" destination="avagards_study"/></div>
        <Item title="Under Red Sun Sands" subtitle="Level Design" image="redsun.png" destination="red_sun"/>
      </section>
      </div>
      <FooterBar/>
      </div>

      
      
      
    </>
  )
}
export default MainPage