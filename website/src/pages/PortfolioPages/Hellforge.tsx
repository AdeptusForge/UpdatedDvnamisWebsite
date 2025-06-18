import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'

const title = "Descent Into HELLForge"
const introductionDetails = "January 2024 \n DOOM 2016 SnapMap"
const introduction = "Descent Into HELLForge was a level I made as a short 2 week experiment in creating dynamic subencounters. Encounter design across different games is a notoriously touchy subject matter. Each game has a different mechanical context that must be accounted for. Even different balancing schemes within the same system set will have wildly different results on how encounters plays out."

// const roles = "Level Design"

// const header1 = ""
const paragraph1 = "For Descent into HELLForge, the first thing I did was re-familiarize myself with the game’s mechanics from a player perspective to better equate myself with the original design space of the game. Some major things I noted down:\nMelee is the least desired form of combat.\nVarious weapons affect engagement range with every type of demon\nMovement while attacking is paramount (kiting, circle strafing, and looping around terrain)\nCover is useful but temporary; demons flush out defensive points"
// const paragraph2 = ""



export default function HellforgePage()
{
  return<>
  <PageTemplate>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p>{introduction}</p></div>
          <div className="ContentVideoHolder"> <iframe width="420" height="315"
src="https://youtu.be/whzmQB-cFZs">
</iframe></div>
        </div>
        <video src=""/>
        <video />
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <p>{paragraph1}</p>
        </div>
      </section>
    </ContentBlock>
    

  </PageTemplate>
  </>
}