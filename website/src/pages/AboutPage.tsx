import HeaderBar from "../components/HeaderBar";
import './BasicPageTemplate.css'
import './AboutPage.css'

function AboutPage()
{
  return <>
  <div className="PageEntry">
    <div className="BackgroundImage"></div>
    <HeaderBar/>
    <embed src="/ProgrammingResume.pdf" type="application/pdf" width="100%" height="100%"/>
    <div className="PageContent">
      
    </div>
  </div>
  </> 
}

export default AboutPage;