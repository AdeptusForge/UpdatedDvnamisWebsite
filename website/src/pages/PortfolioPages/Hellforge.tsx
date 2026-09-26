import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";
//import Carousel from "../../components/Carousel";
// import TabFader from "../../components/TabFader";
import ScrollerButton from "../../components/ScrollerButton";
import OverlayWindow from "../../components/OverlayWindow";

const title = "Descent Into HELLForge"
const introductionDetails = "January 2024 \n DOOM 2016 SnapMap"
const introduction = 'Descent Into HELLForge was a level I made as a short 2 week experiment \
in creating dynamic subencounters. Encounter design across different games is a notoriously \
touchy subject matter. Each game has a different mechanical context that must be accounted for. \
Even different balancing schemes within the same system set will have wildly different results \
on how encounters plays out. \
\n\n\
'

// const roles = "Level Design"

let paragraph1 = 'For Descent into HELLForge, the first thing I did was re-familiarize myself \
with the game’s mechanics from a player perspective to better equate myself with the original \
design space of the game. Some major things I noted down: \
\n\n\
> Melee is the least desired form of combat. \n\
> Various weapons affect engagement range with every type of demon \n\
> Movement while attacking is paramount (kiting, circle strafing, and looping around terrain) \n\
> Cover is useful but temporary; demons flush out defensive points'


const header1= "Dynamic Sub Encounters  "
const paragraph2 = "I build my encounters to be approachable from multiple angles, and \
to be tackled in the order of the player's choosing. Shrewd players and aggressive players will treat each of the following encounters drastically differently."



const header2 = "Blobular Encounter Methodology"
const paragraph3 = "One way I view encounter design is as a series of overlapping and shifting \
‘blobs’ of engagement. These blobs can be anything from future movement, line of sight, attack \
range, or they could be desirable locations, resources, enemies/groups of enemies, or whatever \
is pertinent to the gameplay. In a way, it’s like a shifting heatmap of players, enemies and \
gameplay components, all sloshing around in the container that is ‘the level’. \n\nThe use of \
these blobs is to help recognize how we, as designers, want players to move and think throughout \
a space.  The crucial thing to recognize is that all of these blobs work as fluids in a complex \
combat space, pushing against each other to varying degrees.\ Obstacles obstruct \
movement of both players and enemies, causing them to bounce off & move away. \
 Enemies, particularly melee enemies, push opposing blobs around. Players eliminate or bounce off of other non-allied blobs. \n\n \
 The concept makes understanding the complex, unique nature \
 of every encounter far simpler and provides a more universal way of thinking about the problem of combat."

const header3 = "Post Mortem"
const paragraph4 = "While I am overall extremely happy with the outcome of this project(outside of \
some minor hiccups with the DOOM SnapMap), there are some areas that I would like to examine more \
closely. The map is very 'condensed', and doesn't have much exploration through alternate pathways \
or visual artistry, which I usually like to incorporate into my level design. My prior projects are \
far more open-ended than anything I got to do with this project."

//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function HellforgePage()
{
  return<>
  <OverlayWindow/>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Descent into HELLForge</title>
  </head>
  <PageTemplate>
    
    <LastButton buttonText="LAST" destination="strike_back"/><NextButton buttonText="NEXT" destination="codename_blazer"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/>
          <div>
            <h2>Select Section:</h2>
            <ScrollerButton titleID="Layout & Design Process"/>
            <ScrollerButton titleID="Dynamic SubEncounters"/>
            <ScrollerButton titleID="Blobular Encounter Methodology"/>
          </div>
          </div>
        </div>
        <div className="ContentImageHolder">
          <embed src="https://www.youtube.com/embed/whzmQB-cFZs?si=FaWFVnfZGKzVwi4U" />
        </div>
      </section>
    <TextOnlySection scrollID="Layout & Design Process" header={"Layout & Design Process"} paragraph={paragraph1} />
      <section className="ContentRow" >
        <div className="ContentImageHolder">
          <img width="auto" height="680vh" src="Hellforge/HellforgeLevel.svg"/>
        </div>
      </section>
      <TextOnlySection scrollID="Dynamic SubEncounters" header={header1} paragraph={paragraph2}/>
      <section  className="ContentExpandableRow" >
        <div className="ContentExpandableHolder">
          <Expandable title="SecuriStation" image="Hellforge/SecuriStation.jpg" text = "This simple spread of imps and soldiers acts as an engagement ramp before future encounters with dynamic environmental elements to maintain verisimilitude with the rest of the game world. The available cover lets players modulate the difficulty of this first fight themselves. Aggressive players can charge forward to use the full combat space. Defensive players huddle behind the cover and take opportunistic shots from safety. Tricky players will find the spacing of enemies perfect to engage the infighting mechanics."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Dynamic Duo" image="Hellforge/DynamicDuo.jpg" text = "This encounter is the one that went through the most iteration by far. A revenant spawns in directly in front of the player with a Zombie Soldier next to him. The soldier is barely another threat in this encounter, but when the player shoots the Revenant for the first time it spawns a hellknight around the corner, creating a unique delayed-ambush scenario. This forces the player backwards along the path they took to enter the fight, avoiding the Hellknight’s melee while dodging the Revenant’s ranged attacks."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Boiler Room" image="Hellforge/BoilerRoom.jpg" text = "This room holds a persistent wave-based fight that extends for quite some time and strains on player resources. At any point during the wave-based encounter in this room, a side-room is present with a Mega Health Sphere to alleviate some tension by replenshing resources. However, when they do so, they put themselves into a confined space. This turns the room into a choice for players thinking ahead, and a difficult subencounter if the player stumbles into it unprepared."></Expandable>
        </div>
      </section >
      <section  className="ContentExpandableRow">
        {/* <TabFader faderID="testFader">
          <div></div>
        </TabFader> */}
      </section >
      <TextOnlySection scrollID="Blobular Encounter Methodology" header={header2} paragraph={paragraph3} />
      
      {/* <section  className="ContentExpandableRow">
        <ContentPicker titles={["test1","test2"] as string[]}/>
      </section> */}
      <section  className="ContentExpandableRow">
        <div className="ContentExpandableHolder">
          <Expandable title="Stairway Encounter" image="Hellforge/Stairwell.jpg" text = "This is where Blobular Design is pushed to its most extreme. When the player enters the stairwell the door behind them immediately locks, and two Pinkies spawn far down the staircase with a Cacodemon filling out the airspace. The demons then approach, effectively compressing the player's interaction options to pick from, where they can either kill the pinkies first run down the stairs to make space, or kill the Cacodemon an leap over the pinkies to alleviate combat pressure."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Hellknight Ambush" image="Hellforge/HellknightAmbush.jpg" text = "After fighting the Dynamic Duo encounter, the player is confronted by two heavy melee demons at the bottom of a ramp, with supporting fodder demons spawning behind them, blocking the player's retreat. The Hellknights(acting as a blob), push the player backwards, and the blocking zombies encourage the player to either push through or over them to continue enemy avoidance. A key design principal for me is to inspire emotions through context in players, and this highlights a key emotion most designers don't touch: panic."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="HELLForge Core" image="Hellforge/HellforgeCore.jpg" text = "This fight follows my earlier Blobular Design principles, essentially squeezing the player into positions where they are forced to relieve the pressure themselves and in predictable ways. The player could kill the Revenants, the Cacodemon, or the Pinkies. Regardless of which they pick, a path will open up and the remaining demons will force the player to move into it or to continually dodge. Inevitably, this results in some circle strafing with the last few demons, with the central platform acting as a shortcut should the player desire it."></Expandable>
        </div>
      </section>


      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header3}</h1><p dangerouslySetInnerHTML={{__html: paragraph4}}/></div>
        </div>
      </section>
      <section className="ContentRow" >
        <div className="ContentImageHolder">
          <img width="100%" src="Hellforge/descent.jpg"/>
        </div>
      </section>
    </ContentBlock>
  </PageTemplate>
  </>
}