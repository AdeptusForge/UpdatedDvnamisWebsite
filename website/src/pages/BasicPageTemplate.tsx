import HeaderBar from "../components/HeaderBar" 
import './BasicPageTemplate.css'

export default function PortfolioPage({title=""})
{
  return <div className="PageEntry">
    <div className="BackgroundImage"></div>
    <HeaderBar/>
    <div className="PageContent">
      
    </div>
  </div>
}