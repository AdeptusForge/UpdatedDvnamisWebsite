import PageTemplate from "../BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import ScrollerButton from "../../components/ScrollerButton";
import { NextButton } from "../../components/NextLastButton";
import CodeSample from "../../components/CodeSample";
import OverlayWindow, { OverlayTarget } from "../../components/OverlayWindow";

const title = "WAKE"
const introductionDetails = "August 2024 - April 2025 \n GODOT Engine 4.4"
const introduction = 'WAKE was my first project in GODOT Engine, working \
with a team of 5 other people. I was designated as Design Lead, which \
encompassed building the combat sandbox ruleset and our large singular \
level, in addition to supervising and documenting the work of other designers.'

// const responsibilities = "> Mechanical Combat Design\n> Camera & Character Controller Development\n> UX Iteration \n> Player & AI Behavior Patterning\n> Prototyping\n> Designer Management\n> Playtesting & Research Data Analysis\n> Encounter & Environment Blockouts"

const paragraph1 = 'Our ideation of WAKE was a grand, brutal, cold world with a PSX style. \
Players would explore and fight their way through horrors in a decrepit fishing hamlet off \
a forgotten cliffside coast somewhere in Europe.'

const header1= "Design Approach"
const paragraph2 = 'My first major task was to determine how players would \
be able to interact inside of the World of WAKE, while keeping the project \
scope as small as possible throughout the entire process. Our scope was quite \
small; while the project timeline was 8 months, the manhours  \
we had to work with was closer to 4 concentrated weeks with school running parallel. The shortened timescale \
of the project meant simplifying everything.\n \
\n\
Without more nuanced narrative and gameplay tools, I decided it best to \
focus on a concrete vision of what the player was, and sell that vision \
more than anything:'

const header2 = "Combat Sandbox"
const paragraph3 = 'Starting with the player\’s weapons, I began by \
brainstorming what was appropriate given the setting and narrative \
possibilities, seeing how those weapons filled certain roles, and then \
breaking them out of those predefined niches. \
\n\n\
After coming up with various examples, I began testing them in the game\’s \
combat engine and adding and discarding ideas as they came to me. One way \
I made weapons have use outside of combat was as a traversal tool. Giving \
each weapon its own way of influencing player movement gave them a more \
expressiveness and different affordances than simply being which weapon \
was most optimal for a situation.'



const header3 = "Gas System"
const paragraph4 = 'As a way of better fleshing out the \‘Diving Suit\’ \
aspects of the player, I created a \‘gas system\’. Essentially, the player \
had access to multiple empty tanks filled with various gases that they \
could switch between. These gases could be spent in discrete amounts for \
templated player abilities, with the gas used altering the abilities\’ effects. \
\n\n\
Example: You could throw out a canister filled with oxygen the would explode \
after a given time or when shot, or you could throw a canister out with burning \
vapors and create a damaging fiery area-of-effect zone. This was a way of adding \
an additional dimension to combat interaction without needing a large amount of \
development, as the actions used were identical, all it required was changing the \
projectile information and creating visual signifiers.\
\n\n\
Given our short development time, the gas system was modeled with only 3 different \
gases, but documentation exists for many more fluids and mixing gases.'


const navHeader = "Agent Navigation"
const navParagraph = 'Part of building a complete combat sandbox involves tinkering with agents, and with any \
suitably large & complex environment navigation quickly becomes a problem. \
It is a long-battled optimization problem having agents move intelligently within large 3D environments. \n\n\
The best solution is often a hierarchical one; split the large area into smaller ones, and thus divide the \
problem into smaller, faster to process, chunks. So, I split WAKE\'s world into "Encounter Spaces" with pre-baked \
NavMeshes. Each enemy agent inside an active Encounter Space(or was actively \
tracking the player), would generate a "Proximal Zone"; a small slice of the prebaked NavMesh that is shared among all agents. \n\n\
Agents unable to find a path to the target would gradually widen their Proximal Zone until it connected with the player\'s. \
At that point, agents would path to the point where the player was at the time of connection and continue the process until \
encountering the player or de-aggroing, preventing the need to ever fully access the Encounter Space\'s NavMesh.\n\n\
This narrowed the navigation space down to an even smaller size, and could be fine tuned with each agent\'s behavior. \
From the initial navigation tests, this cut processing time down by approximately 93%, bumping our active agent count \
by an order of magnitude.'

const projectileHeader = "Projectile Prediction"
const projectileParagraph ='Another feature I worked on was enemy projectile prediction. \
It ran a simple check of where the player\s position would be in the proximate future, then \
calculated a travel arc using the given projectile\'s speed and when it would reach the player. \
The final functionality was fairly simple, but required a large amount of tinkering and bugfixing \
to get correct, as most physics code does.\n\n\
Due to multiple enemies ended up needing it, I generalized it, and made it into a new leaf \
node for any of our behavior trees to use'

const smallProjectileCode = `  
Vector3 PredictPlayer(float predictionTime)
{
    CharacterBody3D player = (CharacterBody3D)Blackboard.GetVar("player");
    Vector3 playerPos = player.GlobalPosition;
    Vector3 playerVel = player.Velocity;
    bool floor = player.IsOnFloor();
    float y;
    float x = playerPos.X + playerVel.X * predictionTime;
    float z = playerPos.Z + playerVel.Z * predictionTime;
    
    if (floor) //Player is grounded
    {
    ...
    ...`


export default function WakePage()
{
  return<>
  <OverlayWindow/>
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
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p dangerouslySetInnerHTML={{__html: introduction}}/></div>
          {/* <Expandable title="My Responsibilities" text={responsibilities}></Expandable> */}
          <div>
            <h2>Select Section:</h2>
            <ScrollerButton titleID="Design Approach & Pillars"/>
            <ScrollerButton titleID="Combat Sandbox"/>
            <ScrollerButton titleID="Agent Navigation"/>
            <ScrollerButton titleID="Aim Prediction"/>
            <ScrollerButton titleID="Environmental Manipulation"/>
          </div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="Wake/WAKE_gif.gif" />
        </div>
      </section>
      <section className="ContentRow" id="Design Approach & Pillars">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header1}</h1>
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: paragraph1}}/></div>
          <p dangerouslySetInnerHTML={{__html: paragraph2}}/>
          <h1>Key Design Pillars</h1></div>
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
      <TextOnlySection scrollID = "Combat Sandbox"header = {header2} paragraph={paragraph3}/>
      <TextOnlySection header = {header3} paragraph={paragraph4}/>
      <section className="ContentRow" id="Agent Navigation">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{navHeader}</h1>
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: navParagraph}}/></div>
          </div>
        </div>
        <div className="ContentImageHolder">
          <img width="100%" height="100%" src="Wake/WAKENavigationDiagram.svg" />
        </div>
      </section>
      <section className="ContentRow" >
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{projectileHeader}</h1>
          <div className="ContentText"><p dangerouslySetInnerHTML={{__html: projectileParagraph}}/></div>
          </div>
        </div>
        <div className="ContentTextHolder">
          <OverlayTarget targetID="projectile_code"><CodeSample code = {smallProjectileCode}/></OverlayTarget>
        </div>
      </section>
    </ContentBlock>
  </PageTemplate>
  </>
}