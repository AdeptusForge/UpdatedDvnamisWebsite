import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
// import Expandable from "../../components/Expandable";
import ScrollerButton from "../../components/ScrollerButton";
import { LastButton, NextButton } from "../../components/NextLastButton";
import Expandable from "../../components/Expandable";

const title = "Burger Flippant"
const introductionDetails = "July 2015 / July 2025 \n Unity Engine / GODOT Engine"
const introduction = 'Back in 2015, I participated in a 2 week game-jam with a friend of mine. \
Burger Flippant was the result, a 2D cooking simulator where I was running technical design. \n\n\
10 years later, I decided to take another crack at it as a bit of a miletone for myself as a developer.\
I wanted to see what I could accomplish in the same time with the same goals by myself.\
'

const header2D ="The 2D Original"
const paragraph2D=' To understand the scope of the improvements, let\'s go back to the original first.\
Burger Flippant started life in 2D. Back then I lacked a large amount of knowledge about game engines, \
and was coming fresh off of my very earliest game experiments making various 2D platformers and minor action games.\
Working with my friend Joel at the time, I was focused primarily on design & visuals, while he was strictly programming.\n\n\
The main system I designed for the game was the cooking \
mechanics. Ingredients needed to gradually cook while in contact with the \
grill, needed to be physically manipulatable, and needed to visually show \
how cooked they were. There were other cutting mechanics we had in place \
that eventually got scrapped when we hit our 2 week time frame.'


const paragraph1 = 'When it came to cooking, my thinking was that simplest way to \
handle this was to subdivide ingredients. Every ingredient would be composed \
of \'Physics Nodes\'; box colliders connected by physics joints of differing \
elasticity. This allowed objects to react somewhat realistically while still \
being overexaggerated and cartoony. \n\nTo solve the cooking problem, I \
subdivided them again, and made \'transfer nodes\'. These Transfer nodes, \
similar to Physics Nodes, were connected game objects (albeit not physically), \
and would recieve heat from the grill and store it as an integer. Every node \
would transfer heat to its designated neighbors at different, modifiable rates. \
Increased heat in each node would change the nodes\' color and alter its \
elasticity and physical properties, as well as a \'done-ness\' stat, which was \
used in calculating the final meal\'s score. Reaching certain objective scores \
would grant the player new ingredients and another goal to reach. Done-ness \
thresholds also allowed each ingredient to have unique behavior: \
\n\n> Lettuce would turn black and char\
\n> Meat would eventually burst into flames\
\n> Spices would release flavor particles'
const header1= "Thermal Implementation"
// const paragraph2 = ""

const headerTransition = "Transition to 3D"
const paragraphTransition='Ten years later, moving the project into 3D posed some interesting challenges, even as a much more seasoned programmer. \n\n\
Firstly, building ingredients by hand was not going to cut it, so I created a custom Addon to Godot to help me create & text complex ingredient shapes \
that wouldn\'t be possible or necessary in 2 dimensions. \n\n\
After making the workflow a bit cleaner, I moved onto the convolution problem. Trying to run iterative thermal transfer using a pseudo-blur was already \
fairly slow in 2D; moving it to 3D was downright kneecapping, alongside having to handle far more complex physics now. I spent considerable time moving \
the bulk of the processing onto the GPU using some custom shaders to parallelize everything as much as possible.\n\n\
Finally, after getting it running smoothly, I eventually moved onto modeling & rigging, as well as starting stylization. I managed to make a rudimentary model \
& a simple edge-detection shader before \'running out of time\'.'


const headerPost = "Post Mortem & The Future"
const paragraphPostMortem = 'Both time handling this project, I was supremely happy with the results. I never got around to the scoring systems of either project, \
which prevented it from ever becoming a full \'game\', but each time I learned a massive amount both times. \n\n\If I was to improve the base of the project again, I \
would fundamentally change the way the thermal system works to be more mathematically driven, using a sampling style instead of a voxel-style grid.'

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
          <div className="FullText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/></div>
            <div>
            <h2>Select Section:</h2>
            <ScrollerButton titleID="The 2D Original"/>
            <ScrollerButton titleID="Thermal Implementation"/>
            <ScrollerButton titleID="Transition to 3D"/>
            <ScrollerButton titleID="Post Mortem & The Future"/>
            
          </div>
        </div>
        <div className="ContentImageHolder">
          <video no-controls autoPlay muted loop width="100%" height="100%" src="BurgerFlippant/PortfolioBurgerFlippant.mp4" />
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentText">
          <h1>{header2D}</h1><p dangerouslySetInnerHTML={{__html: paragraph2D}} />
        </div>
        <div className="ContentImageHolder">
          <img width="100%" src="BurgerFlippant/BurgerFlippant.gif"/>
        </div>
      </section>
      <TextOnlySection scrollID="Thermal Implementation" header = {header1} paragraph={paragraph1}/>
      <section className="ContentRow">
        <div className="ContentImageHolder">
          <img width="100%" height="800vw" object-fit="fill" src="BurgerFlippant/BurgerFlippantImplementation.svg"/>
          <p>{'\nThis system came with some unique benefits:'}</p>
        </div>
      </section>
      <section className="ContentExpandableRow">
        <div className="ContentExpandableHolder">
          <Expandable title="Custom Conductivity" text = "Most solid foods aren't uniform through. Best example would be a T-Bone Steak. The bone doesn't conduct heat the same way the meat does. With this system, handling that is as trivial as creating a new ConductivityGrid."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Physics Agnostic" text = "By separating the rigidbodies from the actual thermal calculations, the precision of the thermal calculation can be increased without increasing the physics overhead & vice versa."></Expandable>
        </div>
        <div className="ContentExpandableHolder">
          <Expandable title="Universal Player Understanding" text = "While in recent years I have started to want to stretch player's mental faculties, it can't be understated how powerful it is to have a mechanic be entirely intuitive to anyone who picks up the game, regardless of age or nationality. Making a system that is both complex and easily understood by anyone who tries it is invaluable to a designer, since it lets us focus our efforts elsewhere."></Expandable>
        </div>
      </section>



      <section className="ContentRow" id="Transition to 3D">
        <div className="ContentTextHolder">
          <h1>{headerTransition}</h1><p>{paragraphTransition}</p>
        </div>
        <div className="ContentImageHolder">
          <video no-controls autoPlay muted loop width="100%" src="BurgerFlippant/burger.mp4"/>
        </div>
      </section>

      <TextOnlySection scrollID = "Post Mortem & The Future" header = {headerPost} paragraph={paragraphPostMortem}/>
    </ContentBlock>
  </PageTemplate>
  </>
}