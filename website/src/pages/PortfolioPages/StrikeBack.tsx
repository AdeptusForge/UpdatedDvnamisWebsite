import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "Strike Back"
const introductionDetails = "August 2022 - April 2024 \n FOWL Custom Engine (C++)"
const introduction = "Strike Back is a 2D traditional ground-based fighting game I developed over the course of 8 months with a team of 19 members. I was designated as Technical Lead of the project and was responsible for the engine & tools development, as well as managing the programming department."

const responsibilities = "> Architectural Programming\n> Graphics Pipeline Development\n> Technical Documentation \n> Animation Tools\n> Team Management and Organization\n> Feature Timelining"
// const roles = "Level Design"

const paragraph1 = ""
const header1= "Building a Game (Engine)"
const paragraph2 = "Together, we constructed the engine from scratch using OpenGL. My main concerns were with architecture, simulating the games internal physics, and with rendering capabilities. Having already made a 3D rendering engine in the past, the vast majority of problems were simple to solve, having the benefits of hindsight.\n\nAside from the purely technical aspects of development, leading so many people was a unique experience for me. Given that the engine development was setting the pace for most other tasks, segmenting tasks for other programmers based on our planned future tasks became crucial. Continually maintaining and discussing our project timelines made sure there were rarely blockers for other team members."

const header2 = "The Grand 'Animation Machine'"
const paragraph3 = "The heart and soul of any fighting game is its animation system; how it works, what it can do, and how easy it is to work with. Designers working on fighting games need the ability to almost instantly change character movesets, as fighting games are highly iterative. There is also a need for an extremely rigorous system: professional-grade fighting games should have nearly non-existent or invisible bugs.\n\nThis leads naturally to a conundrum where giving designers behavior editing access can cause a codebase to rapidly become unmanageable, as every time a character changes, potential bugs are introduced.\n\nThe solution is what I dubbed the Animation Machine: a full JSON-based scripting language that is interpretted into a list of sequential AnimationFrames. Our custom engine then uses these AnimationFrames to construct animations during runtime using preset draw calls and event triggers.\n\nThis system provides several uniquely powerful benefits:\n\n> Human readable animation files for easy debugging\n> Ability to reuse animation frames from anywhere on the disk\n> Streamlines designer iteration multiple times while staying in the engine\n> Allows artistic iteration without needing to request re-animation from the art department"

const header3 = "Post Mortem"
const paragraph4 = "The project goal being relatively inflexible technically speaking was double-edged sword. One on hand, it meant that the entire tech team had a concise idea of what we were doing and why we were doing it. On the other, it meant that whenever something became difficult to complete, it could have potentially blocked parts of the project.\n\nWithout my prior experience with 2D & 3D fighting games and action games, the project could have very easily derailed. A single point of failure like that could have very easily doomed the project, and the only good solution is to keep better documentation of individual requirements.\n\nI am overall happy with the project based on the time we had, but I am also frustrated by our lack of ability to polish elements of the game partly due to my own leadership abilities at the time."


export default function StrikeBackPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Strike Back</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="wake"/><NextButton buttonText="NEXT" destination="descent_into_hellforge"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/> <Expandable title="My Responsibilities" text={responsibilities}></Expandable></div>
        </div>
        <div className="ContentImageHolder">
          <embed src="https://www.youtube.com/embed/d7UgyWLVeNI?si=UKlCPoa-Ap5VM4vp" />
        </div>
      </section>

      
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: paragraph1}}/></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentImageHolder">
          <img className="ContentImage" src="StrikeBack/Screenshot_02.png"/>
        </div>
      </section>
      <TextOnlySection header = {header1} paragraph={paragraph2}/>
      <TextOnlySection header = {header2} paragraph={paragraph3}/>
      <TextOnlySection header = {header3} paragraph={paragraph4}/>
    </ContentBlock>
  </PageTemplate>
  </>
}