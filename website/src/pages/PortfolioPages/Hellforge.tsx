import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";

const title = "Descent Into HELLForge"
const introductionDetails = "January 2024 \n DOOM 2016 SnapMap"
const introduction = "Descent Into HELLForge was a level I made as a short 2 week experiment in creating dynamic subencounters. Encounter design across different games is a notoriously touchy subject matter. Each game has a different mechanical context that must be accounted for. Even different balancing schemes within the same system set will have wildly different results on how encounters plays out."

// const roles = "Level Design"


const paragraph1 = "For Descent into HELLForge, the first thing I did was re-familiarize myself with the game’s mechanics from a player perspective to better equate myself with the original design space of the game. Some major things I noted down:\nMelee is the least desired form of combat.\nVarious weapons affect engagement range with every type of demon\nMovement while attacking is paramount (kiting, circle strafing, and looping around terrain)\nCover is useful but temporary; demons flush out defensive points"
const header1= "Dynamic Sub Encounters"
const paragraph2 = "A thematic motif I used throughout this process was constructing encounters as gestalt such that individual encounter elements could be experienced in multiple ways. These subencounters are experienced in multiple unique ways dependent on player prioritization and temperment. Subencounters are blocked out to provide recontextualization to a given level piece without creating overly complex level geometry. Below are some example encounters that made the best usage of this principal."



const header2 = "Blobular Encounter Methodology"
const paragraph3 = "One way I view encounter design is as a series of overlapping and shifting ‘blobs’ of engagement. These blobs can be anything from future movement, line of sight, attack range, or they could be desirable locations, resources, enemies/groups of enemies, or whatever is pertinent to the gameplay. In a way, it’s like a shifting heatmap of players, enemies and gameplay components, all sloshing around in the container that is ‘the level’. \n\nThe use of these blobs is to help recognize how we, as designers, want players to move and think throughout a space. Enemies, particularly melee enemies, push players around the space. Obstacles obstruct movement of both players and enemies, and affect the danger zones of player and enemy weapons. The crucial thing to recognize is that all of these blobs push against each other to varying degrees. It makes understanding the complex, unique nature of every combat encounter from a player easier. To date, I haven't found a game system that this cannot be readily applied to in some capacity, top-down isometric games, third-person-shooters, turn-based RPGs, it works with pretty much everything."

//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function HellforgePage()
{
  return<>
  <PageTemplate>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p>{introduction}</p></div>
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
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header1}</h1><p>{paragraph2}</p></div>
        </div>
      </section>

      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header2}</h1><p>{paragraph3}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentExpandableHolder">
          <Expandable title=""></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title=""></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title=""></Expandable>
        </div>
      </section>
    </ContentBlock>
    

  </PageTemplate>
  </>
}