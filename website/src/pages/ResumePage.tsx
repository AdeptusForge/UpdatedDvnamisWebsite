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
      <section className="ContentSection">
        <embed src="/ProgrammingResume.pdf#view=FitH" type="application/pdf"/>
        <div className="ContentBlock">
          
        </div>
      </section>
    </div>
  </div>
  </> 
}

export default ResumePage;