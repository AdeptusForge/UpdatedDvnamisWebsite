import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
// import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "CODENAME: Blazer"
const introductionDetails = "May 2015 - May 2018 \n Unity"
const introduction = 'Built as my first large solo project, CODENAME:Blazer \
was a side-scrolling rogue-lite with a large overarching narrative. I worked \
on the project while working on a number of other Unity projects.'

// const roles = "Level Design"


const paragraph1 = 'Back in 2015, the big names in rogue-lite games were Binding \
of Isaac, Risk of Rain, FTL, and Spelunky. These games had their own unique \
merits, but one problem they all seemed to share was that their gameplay loop \
necessarily drawn-out narrative cycle. Information was provided to the player on \
either random or progression-based events, and progression would often be tied to \
randomness as well.'
const header1= "Narrative Solutions through Gestalt Systems"
const paragraph2 = 'The random drip-feed of rogue-lite games at the time made it \
hard to engage with them on anything more than an instrumental level. To me this \
meant that the simplest solution would be to tie the narrative to an intellectual \
exercise. \
\n\n\
Combining the open-ended nature of old-school MMO unmarked quests with \
an evidence analysis system derived from Papers Please, and then making sure that \
evidence was available through runs, pacing could be maintained. This would, however \
require the creation of a large interlocking world and several characters to interact \
with both as part of the investigation and as elements with each rogue-lite expedition.'

const header2 = "The Needs of Design"
const paragraph3 = 'One of the first things I learned working in solitude was that \
everything had to be done yourself. Every piece of art, every frame of animation, every \
sound effect, every line of code. This heavily colored the way I made the game, as it \
was often exploratory. I would find a problem and try to solve it, get stuck and go to \
solve a different problem then come back. This process repeated ad infinitum, and lead \
me down many interesting research rabbit holes.\
\n\n\
> With the need for world art and character animation, I learned pixel art and color theory.\n\
> To fix the need for hitboxes hitting multiple times, I learned about Unity\'s Animator \
system and passing tags through event triggers.\n> To make the game pixel perfect, I learned \
about rendering and engine architecture.'

const header3 = "Post Mortem"
const paragraph4 = 'As can be inferred from the fact CODENAME:BLAZER hadn\'t \
revolutionized the indie Rogue-lite space back in 2019, it\'s fairly easy to guess that \
my eyes were larger than my stomach. The sheer artistic and technical requirements were \
outside of the scope of what I could envision at the time. It served as an excellent lesson \
in many ways, however. I learned about the need for representation art and signifiers for \
mechanics, I learned how to animate, and I learned a lot about programming and design \
implementation.\
\n\n\
If I were to try again, I could easily make it further than I did back \
then, but I would also do more planning from the outset to not bite off too much.'

//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function BlazerPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | CODENAME: Blazer</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="descent_into_hellforge"/><NextButton buttonText="NEXT" destination="burger_flippant"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%"src="CodenameBlazer/evidencegif.gif" />
        </div>
      </section>

      
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: paragraph1}}/></div>
        </div>
      </section>
      <TextOnlySection header = {header1} paragraph={paragraph2}/>
      <TextOnlySection header = {header2} paragraph={paragraph3}/>
      <TextOnlySection header = {header3} paragraph={paragraph4}/>
    </ContentBlock>
  </PageTemplate>
  </>
}