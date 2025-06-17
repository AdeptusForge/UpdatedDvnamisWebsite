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
        <Route path="/codename_blazer" element= {<StrikeBackPage/>}/>
        <Route path="/burger_flippant" element= {<StrikeBackPage/>}/>
        <Route path="/dbfz_kai" element= {<StrikeBackPage/>}/>
        <Route path="/omegatech" element= {<StrikeBackPage/>}/>
        <Route path="/avagards_study" element= {<StrikeBackPage/>}/>
        <Route path="/red_sun" element= {<StrikeBackPage/>}/>


      </Routes>
    </Router>
  )
}
export default App