import HeaderBar from "../components/HeaderBar";
import './BasicPageTemplate.css'
import './ResumePage.css'

function ResumePage()
{
  return <>
  <div className="PageEntry">
    <div className="BackgroundImage"></div>
    <HeaderBar/>
    <div className="PageContent">
      <embed src="/ProgrammingResume.pdf" type="application/pdf" width="100%" height="100%"/>
    </div>
  </div>
  </> 
}

export default ResumePage;