import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import { NextButton } from "../../components/NextLastButton";

const title = "WAKE"
const introductionDetails = "August 2024 - April 2025 \n GODOT Engine 4.4"
const introduction = "WAKE was my first project in GODOT Engine, working with a team of 5 other people. I was designated as Design Lead, which encompassed building the combat sandbox ruleset and our large singular level, in addition to supervising and documenting the work of other designers."

const responsibilities = "> Mechanical Combat Design\n> Camera & Character Controller Development\n> UX Iteration \n> Player & AI Behavior Patterning\n> Prototyping\n> Designer Management\n> Playtesting & Research Data Analysis\n> Encounter & Environment Blockouts"

const paragraph1 = "Our ideation of WAKE was a grand, brutal, cold world. Set in a decrepit fishing hamlet off a forgotten cliffside coast somewhere in europe, players would explore and fight their way through humans and horrors alike. A large portion of the design was informed by the artistic direction our team had decide upon: a PSX visual style with high color contrast and saturation."
const header1= "Constructing A Sandbox out of a Shoebox"
const paragraph2 = "My first major task was to determine how players would be able to interact inside of the World of WAKE, while keeping the project scope as small as possible throughout the entire process. Our scope was quite small, as while the project was ostensibly 8 months long, the actual time we had to work was closer to 4 concentrated weeks. The shortened timescale of the project necessitated simplifying world and combat interaction to the point where major storytelling devices were inaccessible due to their programming constraints.\n\nWithout more nuanced narrative and gameplay tools, I decided it best to focus my and my other designer’s efforts wholly on the battle mechanics/dynamics. To make up for the missing design nuance, I made efforts to allow players to interact with the world by using combat mechanics in non-offensive ways as I built the core tenants of the game’s structure."

const header2 = "Giving Players Tools, not Weapons"
const paragraph3 = "Starting with the player’s weapons, I began by brainstorming what was appropriate given the setting and narrative possibilities, seeing how those weapons filled certain roles, and then breaking them out of those predefined niches. \n\nAfter coming up with various examples, I began testing them in the game’s combat engine and adding and discarding ideas as they came to me. One way I made weapons have use outside of combat was as a traversal tool. Giving each weapon its own way of influencing player movement gave them a more expressiveness and different affordances than simply being which weapon was most optimal for a situation."

const header3 = "Gas System"
const paragraph4 = "As a way of better fleshing out the ‘Diving Suit’ aspects of the player, I created a ‘gas system’. Essentially, the player had access to multiple empty tanks filled with various gases that they could switch between. These gases could be spent in discrete amounts for templated player abilities, with the gas used altering the abilities’ effects. \n\nExample: You could throw out a canister filled with oxygen the would explode after a given time or when shot, or you could throw a canister out with burning vapors and create a damaging fiery area-of-effect zone. This was a way of adding an additional dimension to combat interaction without needing a large amount of development, as the actions used were identical, all it required was changing the projectile information and creating visual signifiers.\n\nGiven our short development time, the gas system was modeled with only 3 different gases, but documentation exists for many more fluids and mixing gases."


export default function WakePage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | WAKE</title>
  </head>
  <PageTemplate>
    <NextButton buttonText="NEXT" destination="strike_back"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p>{introduction}</p><Expandable title="My Responsibilities" text={responsibilities}></Expandable></div>
        </div>
        <div className="ContentImageHolder">
          <embed src="https://www.youtube.com/embed/whzmQB-cFZs?si=FaWFVnfZGKzVwi4U" />
        </div>
      </section>

      
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p>{paragraph1}</p></div>
        </div>
      </section>
      {/* <section className="ContentRow">
        <div className="ContentImageHolder">
          <img className="ContentImage" src="descent.jpg"/>
        </div>
      </section> */}
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header1}</h1><p>{paragraph2}</p><h1>Key Design Pillars</h1></div>
        </div>
      </section>
      <section className="ContentExpandableRow">
        <div className="ContentExpandableHolder">
          <Expandable title="Make Players Fill The Diver Suit" text = "The Diver was the player character: a hulking, monstrous, lumbering diver. Every aspect of the diving suit should be felt on a visceral level, and every aspect of the game should reflect that. Aspects of the world should reflect and encourage players to embody the role they have been given from the outset. Being brutal is not just the world’s job, players must be made to be equally brutal."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Be Dangerous, but Never Feel Safe" text = "Scenarios within the game should make players feel their actions having visible impact both on enemies and the world at large. mHowever, should still feel like the world is both larger and more dangerous than they are, and care should be taken to never allow them to feel they are completely alone or without equal."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Keep the Game an Unsolved Problem" text = "If players feel they have found the optimal option in a given situation, they are less likely to experiment. Create weapons that have dedicated situation, but give them purpose outside of their primary combat context to encourage exploration of the combat sandbox. Force players to think ahead and plan actions out a few seconds in advance to keep themselves alive."></Expandable>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header2}</h1><p>{paragraph3}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h2>{header3}</h2><p>{paragraph4}</p></div>
        </div>
      </section>
    </ContentBlock>
  </PageTemplate>
  </>
}