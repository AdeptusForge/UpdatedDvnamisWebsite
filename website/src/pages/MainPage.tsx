
//import { useState } from 'react'
import './MainPage.css'
//import * as motion from "motion/react-client"
import Item from '../components/Scroll'
//import { Example } from '../components/Collapsible'
import '../components/Collapsible.css'
//import Expandable from '../components/Expandable'
import HeaderBar from '../components/HeaderBar'
// import FooterBar from '../components/FooterBar'
import HeaderLogoCard from '../components/HeaderLogoCard'
import { BrowserView, MobileView} from 'react-device-detect';
import DVNAMIS_BLACK from '/DVNAMIS-Logo-Black.svg'


function MainPage() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserView>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>| DVNAMIS | Portfolio</title>
    </head>

    <div className="BackgroundImage">
    <HeaderLogoCard/>
    <HeaderBar/>
    <div className="PortfolioTable">
      {/* <section className="PortfolioRow">
        <Expandable title="1"></Expandable>
        <Expandable title="2"></Expandable>
        <Expandable title="3"></Expandable>
      </section> */}
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="WAKE" subtitle="Level/Systems Designer & Build Master" image="Wake/WAKE_gif.gif" destination="wake"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="STRIKE BACK" subtitle="Technical Lead/Tool Developer" image="StrikeBack/StrikeBackThumb.png" destination="strike_back"/></div>
        <Item title="DESCENT INTO HELLFORGE" subtitle="Level/Encounter Design" image="Hellforge/descent.jpg"  destination="descent_into_hellforge"/>
      </section>
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="CODENAME: Blazer" subtitle="Systems & Level Design & Programmer" image="CodenameBlazer/evidencegif.gif" destination="codename_blazer"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Burger Flippant" subtitle="Systems Design & Programmer" image="BurgerFlippant/BurgerFlippant.gif" destination="burger_flippant"/></div>
        <Item title="DBFZ: KAI" subtitle="Systems Design & Programmer" image="Kai/websitekai.png"  destination="dbfz_kai"/>
      </section>
      <section className="PortfolioRow">
        <div className="LeftHolder"><div className="LeftOffset"></div>
        <Item title="Omegatech: Aspen's Story" subtitle="Level Design" image="OmegaTech/omegatech.png" destination="omegatech"/></div>
          <div className="MiddleHolder"><div className="MiddleOffset">
          </div><Item title="Avagard's Study"  subtitle="Level Design & Graphics/Physics Programmer" image="AvagardsStudy/LevelDesignProject.png" destination="avagards_study"/></div>
        <Item title="Under Red Sun Sands" subtitle="Level Design" image="RedSun/redsun.png" destination="red_sun"/>
      </section>
      </div>
      {/* <FooterBar/> */}
      </div>
      </BrowserView>
      <MobileView>
      <div>Mobile Viewing is not currently available on this website. Please use a desktop environment to view this website until Mobile Viewing has been implemented. Thank You!</div>
      <img className="buttonImage" src={DVNAMIS_BLACK}/>

      </MobileView>

      
      
      
    </>
  )
}
export default MainPage