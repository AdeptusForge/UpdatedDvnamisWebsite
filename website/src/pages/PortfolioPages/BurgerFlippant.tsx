import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
// import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "Burger Flippant"
const introductionDetails = "July 2015 \n Unity"
const introduction = "Burger Flippant was a physics-based arcade cooking simulator I developed as part of a 2 week Game-Jam with a friend of mine. Our goal was to finish the entire game in those 2 weeks, with my friend working as programming, and myself working as designer inside Unity.\n\nI was responsible for designing the games' ludology, the games' UI, and handling the artistic aspects of the game."

// const roles = "Level Design"


const paragraph1 = "The main system I designed for the game was the cooking mechanics. Ingredients needed to gradually cook while in contact with the grill, needed to be physically manipulatable, and needed to visually show how cooked they were. To this end, my thinking was that simplest way to handle this was to subdivide ingredients. Every ingredient would be composed of 'Physics Nodes'; box colliders connected by physics joints of differing elasticity. This allowed objects to react somewhat realistically while still being overexaggerated and cartoony. \n\nTo solve the cooking problem, I subdivided them again, and made 'transfer nodes'. These Transfer nodes, similar to Physics Nodes, were connected game objects (albeit not physically), and would recieve heat from the grill and store it as an integer. Every node would transfer heat to its designated neighbors at different, modifiable rates. Increased heat in each node would change the nodes' color and alter its elasticity and physical properties, as well as a 'done-ness' stat, which was used in calculating the final meal's score. Reaching certain objective scores would grant the player new ingredients and another goal to reach. Done-ness thresholds also allowed each ingredient to have unique behavior: \n\n> Lettuce would turn black and char\n> Meat would eventually burst into flames\n> Spices would release flavor particles"
const header1= "Implementation"
// const paragraph2 = ""



const header2 = "Post Mortem"
const paragraph3 = "This project was very fun overall, but I found it difficult to articulate design ideas programmatically because I was significantly less experienced than my partner. While handling the burgers was enjoyable, it was also difficult to understand how one might change interacting with an object physically through certain control schemas. This is something I would learn many years later, but at the time it was lacking in my design repertoire."

const header3 = ""
const paragraph4 = ""

//Player behavior can usually be boiled down to far fewer options because of the circumstances they are put in.

export default function BurgerFlippantPage()
{
  return<>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Burger Flippant</title>
  </head>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="codename_blazer"/><NextButton buttonText="NEXT" destination="dbfz_kai"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/></div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="BurgerFlippant/BurgerFlippant.gif" />
        </div>
      </section>
      <TextOnlySection header = {header1} paragraph={paragraph1}/>
      <TextOnlySection header = {header2} paragraph={paragraph3}/>
      <TextOnlySection header = {header3} paragraph={paragraph4}/>
    </ContentBlock>
  </PageTemplate>
  </>
}