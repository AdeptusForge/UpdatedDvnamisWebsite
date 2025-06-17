import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'

const title = "Descent Into HELLForge"
const introductionDetails = "January 2024 \n DOOM 2016"
const introduction = "Descent Into HELLForge was a level I made as a short 2 week experiment in creating dynamic subencounters. Encounter design across different games is a notoriously touchy subject matter. Each game has a different mechanical context that must be accounted for. Even different balancing schemes within the same system set will have wildly different results on how encounters plays out."

// const roles = "Level Design"

// const header1 = ""
// const paragraph1 = "here's some text"
// const paragraph2 = ""



export default function HellforgePage()
{
  return<>
  <PageTemplate>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p>{introduction}</p></div>
        </div>
        <video src=""/>
        <video />
      </section>      
    </ContentBlock>
    

  </PageTemplate>
  </>
}