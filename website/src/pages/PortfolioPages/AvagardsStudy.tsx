import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
// import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "Avagard's Study"
const introductionDetails = "January 20th, 2024 - February 12th, 2024 \n Unity"
const introduction = "Avagard's Study is a level designed for a predefined 3rd person controller that experiments with architectural framing and sightlines.\n\nAvagard’s Study was 3 week level design challenge that I did to try and experiment with changing player context. For this, I decided to code a custom portal system in Unity and use ProBuild to save myself time during level construction."

// const roles = "Level Design"


const paragraph1 = ""
const header1= "Design Process"
const paragraph2 = "I started with a rough level sketch based on several ideas pulled from House of Leaves, Library of Ruina, and Book of Hours. \n\nThe narrative throughline of the level starts with the player entering on a hemmed-in mountain top with a singular path up to an observator with a slightly ajar door. By the angle of the door to the player, they are unable to see inside, which is crucial in hiding the portal to the oversized interior.\n\nThe main motif was the larger than life building with countless rows of books and artifacts. I was playing with older architectural styles as well, relying on art nouveau and néoclassique mainly, with baroque and constructivist elements thrown in to break up the space and make it feel otherworldly. However, of course, there’s only so much that one can show with proper modeling.\n\nAfter entering, the player is greeted by several avenues through the space that serve to expand on the player’s knowledge of the space before ascending the central staircase. For highly-direct players, the central pathway leads directly to the staircase, but for others, their attention can wander to either the lecture hall or the sparring area. All of which expands knowledge of the space by expanding the context & scope."


const header2 = "Building a Better Staircase"
const paragraph3 = "The stairs and the rooms on it were by far the hardest part of this level. I decided on a uniquely-slanted spiral staircase.This gives players unique setpieces at each portion of the stairs, and does a far better job of signposting intent to the player. It also acts as a small UX improvement over normal vertical spiral staircases; it requires less input and reorientation for players to look diagonally along its length without needing take their camera completely off the floor. \n\nEach level section of the stairs opens to a portal of a room in a different architecture style, further implying a grander scope of the occupants of the building while also informing more on the goings on of the day-to-day activities. \n\nAs the player ascends up the staircase, the player is slowly given insight into an insidious force that is corrupting the observatory. This climaxes in the final observatory, where the entire area is filled corruption, with all of the dead occupants corpses littering the room. "

const header3 = "Post Mortem"
const paragraph4 = "Unfortunately I didn’t get the time to finish the resolution in a satisfactory way, but I was overall pleased with the result, and my playtesters said likewise. I spent a large amount of time programming/bugfixing in the portal system, and while that did lead to unique level geometry, it also took time away from refinement."

//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function AvagardsStudyPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Avagard's Study</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="omegatech"/><NextButton buttonText="NEXT" destination="red_sun"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p>{introduction}</p></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="AvagardsStudy/LevelDesignProject.png" />
        </div>
      </section>

      
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p>{paragraph1}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header1}</h1><p>{paragraph2}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header2}</h1><p>{paragraph3}</p></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="AvagardsStudy/stairsgif.gif" />
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header3}</h1><p>{paragraph4}</p></div>
        </div>
      </section>
    </ContentBlock>
  </PageTemplate>
  </>
}