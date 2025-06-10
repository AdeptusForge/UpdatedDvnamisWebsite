import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import Page from './pages/BasicPageTemplate.tsx'
import ResumePage from './pages/ResumePage.tsx'
import AboutPage from './pages/AboutPage.tsx'

function App()
{
  return (
    <Router>
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