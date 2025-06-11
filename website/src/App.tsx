import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import Page from './pages/BasicPageTemplate.tsx'
import ResumePage from './pages/ResumePage.tsx'
import AboutPage from './pages/AboutPage.tsx'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <Route path="/testpage" element= {<Page/>}/>
      </Routes>
    </Router>
  )
}
export default App