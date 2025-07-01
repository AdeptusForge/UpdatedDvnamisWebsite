import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
// import Expandable from "../../components/Expandable";
import { LastButton } from "../../components/NextLastButton";

const title = "Under Red Sun Sands"
const introductionDetails = "Unity"
const introduction = "A quick 10 hour level study in pacing and changing implied contexts.\n\nUnder Red Sun Sands was a Unity level white-boxing project I undertook as part of an analysis of 3D viewpoints and how level geometry needs to be modified based on the angle of player approach. The concept for the level was a desert that has become infested with vile other-worldly growths. These growths were centered around a facility, which the would player enter and traverse downward toward the source of the otherworldly growths. \n\nMy main goal for the project was to come to a better understanding of 3D level structure and improve my creation speed while under strict time constraints. I also wanted to frame the level as being eery and creepy by exercising some of the pacing lessons I had learned in the past."

// const roles = "Level Design"


const paragraph1 = ""
const header1= ""
const paragraph2 = "My first attempts saw that I ran into teething troubles with Unity's terrain tool, as I spent a few hours attempting to get a proper grip on making nuanced level geometry with it. The biggest problem I had was with sand dunes; desert dunes are rather complex geometrically speaking, and unity's barebones terrain tool made it difficult to properly model baseline terrain from my early sketches. Design-wise, the choice of a desert also created other problems. Deserts are usually fairly 'even' when it comes to the type of terrain you can get away with. Jutting crags, rocks, and the growths I inserted into the map could be used to block player movement, but they also disturbed the open sightlines I was hoping for on the map."



const header2 = ""
const paragraph3 = "After a good amount of time spent poking and prodding at the idea several times, I ended up scrapping most of the blocking terrain in favor of the more open version I wanted. Due to the project's time constraints, I couldn't figure out proper solutions to these problems and simply had to make due. I ended up focusing on refining my workflow more and more as the project continued. A big benefit I found was in using static cameras in particularly important locations while I was editing terrain. This way, I could edit terrain in one location while also being sure how it would alter the views other locations in the level."

const header3 = "Post Mortem"
const paragraph4 = "Overall this project was a good experiment for the time I had, but in future I think I would develop the concept *after* trying to learn the tools available. The facility itself was also far less polished than I would have liked, and player guidance there is too linear for my tastes."

//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function RedSunPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Under Red Sun Sands</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="avagards_study"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%"src="RedSun/redsun.png" />
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentImageHolder">
          <img className="ContentImage"width="100%" height="100%" src="RedSun/desert.jpg"/>
        </div>
      </section>
      <TextOnlySection header = {header1} paragraph={paragraph2}/>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: paragraph1}}/></div>
        </div>
      </section>
      <TextOnlySection header = {header2} paragraph={paragraph3}/>
      <section className="ContentRow">
        <div className="ContentImageHolder">
          <img className="ContentImage" src="RedSun/dome.png"/>
        </div>
      </section>
      <TextOnlySection header = {header3} paragraph={paragraph4}/>
    </ContentBlock>
  </PageTemplate>
  </>
}