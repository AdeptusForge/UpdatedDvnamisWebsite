import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import Page from './pages/TestPage.tsx'

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<MainPage/>}/>
        <Route path="/about" element= {<Page/>}/>
      </Routes>
    </Router>
  )
}
export default App