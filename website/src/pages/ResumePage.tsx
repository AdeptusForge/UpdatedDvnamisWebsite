//import HeaderBar from "../components/HeaderBar";
import './BasicPageTemplate.css'
import './ResumePage.css'
import PageTemplate from "./BasicPageTemplate";

function ResumePage()
{
  return <>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Resume</title>
  </head>
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