import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "Omegatech: Aspen's Story"
const introductionDetails = "May 2016 - March 2017 \nMegaworld Studios\nUnity"
const introduction = "Descent Into HELLForge was a level I made as a short 2 week experiment in creating dynamic subencounters. Encounter design across different games is a notoriously touchy subject matter. Each game has a different mechanical context that must be accounted for. Even different balancing schemes within the same system set will have wildly different results on how encounters plays out."

const responsibilities = "> Crafting Procedural Level Palettes\n> Pathing Conveyance\n> Documentation\n> Working Within a Designed Space Language"


const paragraph1 = "Omegatech: Aspen’s Story was my first taste of professional game development after being picked up on the Unity forums. Overall, the project was somewhat vague in scope and design goals, and I was often given tasks and paid more based on the amount of work I did rather than the quality of that work. \n\nPrimarily my work consisted of building level ‘palettes’ in Unity that would be utilized by our team’s procedural level generation. This generally meant that every level piece created needed to be spatially differentiable in very small viewing angles, and that they needed to enforce interesting gameplay within our combat space, while also fitting within predefined space requirements.\n\nMy first attempts at this were poor, and I am not ashamed to say that it took me some time to fit into the system’s requirements. I was used to building levels in Unity that were intended for players to approach them from a single angle and have nearly complete control over their camera view. Mobile devices presented a massive hurdle that I still haven’t solved to this day, but I did make headway towards solving the problem.\n\nSeveral rounds of experimentation lead to relying on the more open spatial archetypes, allowing players to see more, even on small phones. Blocking elements were slimmed down, and on screen enemies were given more space to move.\n\nDuring my time working at Megaworld Studios, the usage of varieties of high contrast colors and terrain texture became more useful than relying on purely spatial solutions due to playing on mobile. Working on a mobile game really helped me to learn more about creating unique environment blockouts without relying on commonly used level solutions. One thing I wish I had done working on this project was to keep track of my own work. I was less of a data packrat back then, and a great deal of my work for this project now only exists in memory. The only surviving footage of the game is "
const header1= "Post Mortem"

export default function OmegaTechPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | OmegaTech</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="dbfz_kai"/><NextButton buttonText="NEXT" destination="avagards_study"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/><Expandable title="My Responsibilities" text={responsibilities}></Expandable></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="OmegaTech/ingameshot.png" />
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header1}</h1><p>{paragraph1}<a href="https://www.youtube.com/watch?v=T8ZPa8rBtTA">this video from 9 years ago.</a></p></div>
        </div>
      </section>
    </ContentBlock>
  </PageTemplate>
  </>
}