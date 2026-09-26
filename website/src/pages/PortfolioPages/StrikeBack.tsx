import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import ScrollerButton from "../../components/ScrollerButton";
import { LastButton, NextButton } from "../../components/NextLastButton";
import AnimationMachineDiagram from "/StrikeBack/AnimationMachineDiagram.svg"

const title = "Strike Back"
const introductionDetails = "August 2022 - April 2024 \n FOWL Custom Engine (C++)"
const introduction = 'Strike Back is a 2D traditional ground-based fighting game \
I developed over the course of 8 months with a team of 19 members. I was \
designated as Technical Lead of the project and was responsible for the engine & \
tools development, as well as managing the programming department.'

const responsibilities = "> Architectural Programming\n> Graphics Pipeline Development\n> Technical Documentation \n> Animation Tools\n> Team Management and Organization\n> Feature Timelining"
// const roles = "Level Design"

//const paragraph1 = ""
const header1= "Building a Game (Engine)"
const paragraph2 = 'Together, we constructed the engine from scratch using OpenGL. \
My main concerns were with architecture, simulating the games internal physics, \
and with rendering capabilities. Having already made a 3D rendering engine in the \
past, the vast majority of problems were simple to solve, having the benefits of \
hindsight.\
\n\n\
Aside from the purely technical aspects of development, leading so \
many people was a unique experience for me. Given that the engine development was \
setting the pace for most other tasks, segmenting tasks for other programmers based \
on our planned future tasks became crucial. Continually maintaining and discussing our \
project timelines made sure there were rarely blockers for other team members.'

const header2 = "The Grand 'Animation Machine'"
const paragraph3 = 'The heart and soul of any fighting game is its animation system; \
how it works, what it can do, and how easy it is to work with. Designers working on \
fighting games need the ability to almost instantly change character movesets, as \
fighting games are highly iterative. There is also a need for an extremely robust \
system: professional-grade fighting games should have nearly non-existent or invisible \
bugs.\n\nThis leads naturally to a conundrum where giving designers direct behavior editing \
access can cause a codebase to rapidly become unmanageable, as every time a character \
changes, potential bugs are introduced.\n\nThe solution is what I dubbed the Animation \
Machine: a full JSON-based markdown language that is interpretted into a list of \
sequential AnimationFrames by the engine. A custom Animator class then uses these AnimationFrames to construct \
animations during runtime that will be read during gameplay into texture swap calls and event triggers.'

const paragraph4 = 'This system provides several uniquely powerful benefits:\
\n\n\
1 ) Human readable animation files make for easy debugging by both designers and programmers\n\
2)  Streamlines the character animation workflow by staying in-engine the entire time\n\
3)  The capability to reuse animation frames from any currently loaded fighterdata during runtime allows more design freedom\n\
4)  It allows designer to tailor animations for gameplay without needing to request re-animation from the art department\
\n\n\
The Animation Machine I built streamlined the entire development process, despite the time it took to setup and test from conception. \
Without it, I don\'t think the game would have been half as good as it ended up becoming.'



const header3 = "Post Mortem"
const paragraph5 = 'The project goal was relatively inflexible, technically speaking. One on hand, it meant that the entire tech team had a concise idea of \
what we were doing and why we were doing it. On the other, it meant that whenever something \
became difficult to complete, it could have potentially blocked parts of the project.\
\n\n\
Without my prior experience with 2D & 3D fighting games and action games, the project could \
have very easily derailed. A single point of failure like that could have very easily doomed \
the project, and the only good solution is to keep better documentation of individual \
requirements.\
\n\n\
I am overall supremely happy with the project, but I am equally frustrated by how \
unpolished some elements of the game ended up being.'


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
            <div>
              <h2>Select Section:</h2>
              <ScrollerButton titleID="Building a game (engine)"/>
              <ScrollerButton titleID="The Grand Animation Machine"/>
              <ScrollerButton titleID="Post Mortem"/>
            </div>
        </div>
        <div className="ContentImageHolder">
          <embed src="https://www.youtube.com/embed/d7UgyWLVeNI?si=UKlCPoa-Ap5VM4vp" />
        </div>
      </section>

{/*       
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: paragraph1}}/></div>
        </div>
      </section> */}
      <section className="ContentRow">
        <div className="ContentImageHolder">
          <img width="100%" src="StrikeBack/Screenshot_02.png"/>
        </div>
      </section>
      <TextOnlySection scrollID="Building a game (engine)" header = {header1} paragraph={paragraph2}/>
      <TextOnlySection scrollID="The Grand Animation Machine" header = {header2} paragraph={paragraph3}/>
      <img width="60%" height="100%" src={AnimationMachineDiagram} role="img"/>
      <TextOnlySection paragraph={paragraph4}/>
      <TextOnlySection scrollID="post Mortem" header = {header3} paragraph={paragraph5}/>
    </ContentBlock>
  </PageTemplate>
  </>
}