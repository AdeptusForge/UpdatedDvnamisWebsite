import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import Page from './pages/BasicPageTemplate.tsx'

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<MainPage/>}/>
        <Route path="/about" element= {<Page/>}/>
        <Route path="/resume" element= {<Page/>}/>
        <Route path="/testpage" element= {<Page/>}/>

      </Routes>
    </Router>
  )
}
export default App