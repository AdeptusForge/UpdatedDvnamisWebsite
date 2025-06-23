import './App.css'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import Page from './pages/BasicPageTemplate.tsx'
import ResumePage from './pages/ResumePage.tsx'
import AboutPage from './pages/AboutPage.tsx'

import WakePage from './pages/PortfolioPages/Wake.tsx'
import StrikeBackPage from './pages/PortfolioPages/StrikeBack.tsx'
import HellforgePage from './pages/PortfolioPages/Hellforge.tsx';
import BlazerPage from './pages/PortfolioPages/CodenameBlazer.tsx';
import BurgerFlippantPage from './pages/PortfolioPages/BurgerFlippant.tsx';
import KaiPage from './pages/PortfolioPages/DBFZKAI.tsx';
import OmegaTechPage from './pages/PortfolioPages/OmegaTech.tsx';
import AvagardsStudyPage from './pages/PortfolioPages/AvagardsStudy.tsx';
import RedSunPage from './pages/PortfolioPages/RedSun.tsx';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App()
{
  return (

    <Router>

      <ScrollToTop/>
      <Routes>
        <Route path="/" element= {<MainPage/>}/>
        <Route path="/about" element= {<AboutPage/>}/>
        <Route path="/resume" element= {<ResumePage/>}/>
        <Route path="/contact" element= {<Page/>}/>
        <Route path="/wake" element= {<WakePage/>}/>
        <Route path="/strike_back" element= {<StrikeBackPage/>}/>
        <Route path="/descent_into_hellforge" element= {<HellforgePage/>}/>
        <Route path="/codename_blazer" element= {<BlazerPage/>}/>
        <Route path="/burger_flippant" element= {<BurgerFlippantPage/>}/>
        <Route path="/dbfz_kai" element= {<KaiPage/>}/>
        <Route path="/omegatech" element= {<OmegaTechPage/>}/>
        <Route path="/avagards_study" element= {<AvagardsStudyPage/>}/>
        <Route path="/red_sun" element= {<RedSunPage/>}/>


      </Routes>
    </Router>
  )
}
export default App