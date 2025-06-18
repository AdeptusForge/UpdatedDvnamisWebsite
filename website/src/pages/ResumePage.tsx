//import HeaderBar from "../components/HeaderBar";
import './BasicPageTemplate.css'
import './ResumePage.css'
import PageTemplate from "./BasicPageTemplate";

function ResumePage()
{
  return <>
  <PageTemplate>
      <section className="ContentSection">
        <embed className="resumeEmbed" src="/ProgrammingResume.pdf#view=FitH" type="application/pdf"/>
        <div className="ContentBlock">
        </div>
      </section>
  </PageTemplate>
  </> 
}

export default ResumePage;