import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "Dragon Ball FighterZ KAI"
const introductionDetails = "November 2019 - June 2020 \n Modding DBFZ"
const introduction = "A 1v1 variant mod for the immensely popular fighting game Dragon Ball FighterZ. DBFZ:KAI spawned from equal parts my frustration and love of the original game. At the time, I was particularly disillusioned with the balance state of several characters, and started writing up some quick ideas regarding how changes could make them both more enjoyable and balanced in the base roster. Eventually, this morphed into full-fledged system overhaul for every character and in-depth changes to all their mechanics."

// const roles = "Level Design"


const paragraph1 = "After liberal research into the game’s code and study of older Arc System Works games, I found BlazBlue Script. BBScript was a proprietary scripting language for designers to modify character abilities that Arc System Works had been using for every game(including DBFZ) since the original BlazBlue Calamity Trigger. I developed my own program to modify the BBScript to be writable in Python, making it possible to modify any character in Dragon Ball Fighter Z. \n\nBelow is an in-development look at several of the changes coming together to alter the combo structure of Goku:"
const header1= "Design Constraints"
const paragraph2 = "Kai was developed with clear design goals and limitations due to the limitations of my BBScript modification, and my own scope constraints:\n> No Teammate Actions: Assists or Tagging\n> All Characters must function on offense & defense without Teammate Actions \n> No New Animation Frames\n\nThe lack of new animation frames and removing assists necessitated adding affordances to character actions without fundamentally altering them, and adding new baseline mechanics to not remove depth from the original game. Without assists, many characters lost fundamental ways of creating openings in the opponent, or lost the ability to control space reliably.\n\nWithout the ability to create new animation frames, I could not create new character actions ex-nihilo; every new action or altered action had to be derived from other moves that already were present. This creates its own problems, as character normal & special attacks in the base game were designed to be significantly larger in order to catch the opponent over larger portions of screen space, and make 'tightening up' the design space rather difficult."
const challenges= "Challenges for the new ruleset"


const header2 = "Solution Through Innovation"
const paragraph3 = "My Design philosophy for solving the majority of problems was to use multi-faceted solutions; create elementing within the games’ ruleset that solve more than one problem at once. It reduced my own scope overhead, and meant I had to think of novel solutions to bespoke fighting game problems. \n\nBelow are some of the solutions I developed:"

const header3="Design Results"
const paragraph4="Kai Cancels ended up being the most fun new aspect to the mod; they revitalized ranged gameplay and provided move character uniqueness by further delineating move functionality for each character, while also greatly expanding the combo space of each character. Now Ki Specials are contextualized with the Normal Specials a character has as well, effectively recontextualizing all Special moves on every character. Several of the players I playtested with commented it should be in the base game.\n\n Faster normals shortened combo duration, blockstrings, and pressure sequences, but didn't change the pace of gameplay where neither player is advantaged. This was an unintended effect, but was not outside of the original design goals, so was not addressed.\n\nRubberband Dashes were recieved strangely, and many players commented on how the entire game felt stranger when they were introduced. The design hypothesis for this is that all of the playtesters were native Dragon Ball FighterZ players, and thus had an inbuilt context for the game. Making changes to the fundamental aspects was outside of their frame of reference, and they were unsure how to factor it into behavioral changes during gameplay. More testing with a purely new fighting game engine would have led to more undiluted results."

const header4 = "Post Mortem"
const paragraph5 = "I ended up having to shelve this project indefinitely. At the time, the modding tools for DBFZ were rudimentary, and I was unwilling to dig into executable hacking to try and further the tools necessary for them. Several of the changes I made to characters in Kai would show up in whole or in part in the game in later seasons. SSJ Vegeta's ability to cancel his Consecutive Ki blasts, as well as the ability to combo into Vegeta Blue's hitgrabs in midair being the most notable examples. I learned a lot about controlling disparate implications of rule changes, and how to better conduct playtests of instrumental games."



//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function KaiPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | DBFZ: Kai</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="burger_flippant"/><NextButton buttonText="NEXT" destination="omegatech"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="Kai/websitekai.png" />
        </div>
      </section>

      
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: paragraph1}}/></div>
        </div>
      </section>
      <section className="ContentRow">
        <video  width="92%" height="90%" src="Kai/kai_showcase.mp4" controls/>
      </section>
      <TextOnlySection header = {header1} paragraph={paragraph2}/>
      <TextOnlySection header = {challenges} paragraph={''}/>
      <section className="ContentExpandableRow">
        <div className="ContentExpandableHolder">
          <Expandable title="Removing Assists Reduces Possibility Gamestates" text = "Assists in the base game serve a wide variety of purposes and expand the design space of the game in myriad ways. They allowed for both diversity in playstyle and diversity of outcome, as Assists would drastically change in function & effectiveness depending on the situational use."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Stagnant Ranged Gameplay without Assists" text = "One of the main usages of assists was to control space and prevent opponents from moving, or to disincentivize opponent actions. Without assists, most characters lacked a rich enough ranged gameplan to successfully combat opponents without immediately resorting to melee, as movement was ferociously fast."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Lack of Combo Variety" text = "DBFZ had a notorious problem where combos were almost unimportant to gameplay, as situational outcomes were often identical. Any combo worth doing would lead to a knockdown in the corner, with large amounts of positive frame advantage. Often times this also meant that combos were highly monotonous across the cast and reduced player expressiveness."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Lack of Diverse Character Function" text = "Characters were originally designed to be almost interchangeable on purpose. They wanted characters that were easy to pick up and switch between on the fly for new players without causing frustration. This meant that characters needed to have new creative options and niches added to them."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Less Points of Attention on Offense/Defense" text = "Characters at the time were balanced around having assists, meaning their frame data was slower than normal to compensate, and attacks generally had longer periods of downtime to allow for wider openings in a more chaotic space. Reducing the points of attention during gameplay lowered mental effort far too much, and make defense far more powerful."></Expandable>
        </div>
      </section>
      <TextOnlySection header = {header2} paragraph={paragraph3}/>
      <section className="ContentExpandableRow">
        <div className="ContentExpandableHolder">
          <Expandable title="Kai Cancels" text = "Every character in the game has a ‘Ki Special’ move alongside their ‘Normal Special’ moves. These usually create unique projectiles or perform unique functions. To solve the character diversity problem, I allowed every character to cancel Normal Special moves while performing Ki Special moves. "></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="'Rubberband' Dashing" text = "To increase the variety of movement, and improve offensive capabilities further, I implemented a new concept called Rubberband Dashing. In the base game, dashing can be canceled at any time with any Attack button, or by blocking. To amplify this further, characters would now take a short, fast step backwards before moving forward at higher speed with greater momentum, allowing player six unique movement options with a grounded dash instead of the classical two."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Speeding up Nearly Every Move" text = "A simple sounding change, but changing the framedata of every move in the game while keeping them all balanced is no easy feat. Making player actions faster and shorter improves offense and defense at the same time by making choices less committal and more effective, and unintended design effects need to be monitored through rigorous iteration and playtesting."></Expandable>
        </div>
      </section>
      <TextOnlySection header = {header3} paragraph={paragraph4}/>
      <TextOnlySection header = {header4} paragraph={paragraph5}/>
    </ContentBlock>
  </PageTemplate>
  </>
}