
import './MainPage.css'
import '../components/Collapsible.css'
import PageTemplate from "./BasicPageTemplate";
import { ContentBlock } from "./BasicPageTemplate";
import './BasicPageTemplate.css'
import Carousel from '../components/Carousel'
import OverlayWindow from '../components/OverlayWindow'
import { OverlayTarget } from '../components/OverlayWindow';
import ScrollerButton from '../components/ScrollerButton';
import { type ReactNode } from "react";
import './SideProjects.css'
import CodeSample from '../components/CodeSample';

interface Props {
  children?: ReactNode
}


const title = "SIDE PROJECTS"
// const loremipsum = "lorem ipsum dolor sit amet consectetur adipiscing elit aliqua cupiditate omnis cillum corrupti elit minim at autem in est deserunt harum sit ducimus mollitia consequatur consequat officia officia corrupti sint officia et fugiat nulla consequat ipsum officia ad voluptas at lorem in qui molestias vel quis et dolor nulla aute do officia ut fugiat soluta eiusmod distinctio est deserunt quis quod nam voluptatum accusamus dolore ut ad est in cupidatat animi pariatur eu id repellendus similique quidem praesentium nobis similique ut occaecat et duis odio repellendus dignissimos qui officia distinctio cum fugiat at eos illum cumque repellendus autem dolore dolorum irure tempore qui id qui fugiat omnis dolores et atque ducimus in dolor molestias et cum et qui magna qui nulla soluta voluptas minus libero deserunt in iusto provident enim iusto voluptas omnis occaecat qui dolorum facilis cillum culpa officia ut occaecat nam ipsum aute commodo excepturi quo quis animi mollitia laborum quos deserunt voluptate et exercitation praesentium corrupti consequat dolor provident laboris veniam sunt lorem ipsum dolor sit amet consectetur adipiscing elit aliqua cupiditate omnis cillum corrupti elit minim at autem in est deserunt harum sit ducimus mollitia consequatur consequat officia officia corrupti sint officia et fugiat nulla consequat ipsum officia ad voluptas at lorem in qui molestias vel quis et dolor nulla aute do officia ut fugiat soluta eiusmod distinctio est deserunt quis quod nam voluptatum accusamus dolore ut ad est in cupidatat animi pariatur eu id repellendus similique quidem praesentium nobis similique ut occaecat et duis odio repellendus dignissimos qui officia distinctio cum fugiat at eos illum cumque repellendus autem dolore dolorum irure tempore qui id qui fugiat omnis dolores et atque ducimus in dolor molestias et cum et qui magna qui nulla soluta voluptas minus libero deserunt in iusto provident enim iusto voluptas omnis occaecat qui dolorum facilis cillum culpa officia ut occaecat nam ipsum aute commodo excepturi quo quis animi mollitia laborum quos deserunt voluptate et exercitation praesentium corrupti consequat dolor provident laboris veniam sunt"

const triplanarP = 'Since I level design a lot, a while back I figured the best thing I could do was to make my life easier. \
\n\
While I generally don\'t have the time to make my levels look as snazzy as they deserve, I found there were ways to get more from less. This Triplanar Texturing material makes it very easy to add visual variety to large scenes without needing to spend undue time. Not very optimized, as it is meant as a development stopgap tool rather than a game-ready shader\n\
I will eventually spend a few more hours on it to optimize it & make it fully stochastic as well.'

// const triplanar_code = `void fragment() {
// 	vec4 vertex = INV_VIEW_MATRIX * vec4(VERTEX, 1.0);
// 	vec3 normal = normalize((INV_VIEW_MATRIX * vec4(NORMAL, 0.0)).xyz);
// 	vec3 adjustedNormal = pow(abs(normal), blending_coefficient);
// 	vec3 weights = (adjustedNormal / (adjustedNormal.x + adjustedNormal.y + adjustedNormal.z)) * 3.0;
	
// 	vec2 vert_x = (axis_x_swizzle ? vertex.yz : vertex.zy);
// 	vec2 vert_y = (axis_y_swizzle ? vertex.xz : vertex.zx);`

const HK47P = "As part of the Kipper Project I'm working on presently, \
I found the need to learn 3D modeling/rigging/UVing from scratch to understand the exact process from a non-programmatic or design perspective.\n\
Kept some various progress shots of the experimentation process and the results of ~90 hours of work & learning so far.\n\
I'll eventually return to the project to fix the topology & finish UV mapping."

const action_channels = "While working on some school projects, I was required to build an ActionList system to coordinate simultaneous UI. \
The system I was required to build back then was rudimentary at best, and had obvious avenues for improvement.\n\
The biggest change to the formula was to allow multiple actions to influence the same value at the same time by using additive channels.\
It functions by sampling a curve based on the difference between its current state & past state. A standard ActionList system didn't allow desynced or parallel actions on the same variable, only sequencial. \n\
I didn't realize until I dropped the project much later that I had reverse engineered a sort of linear interpolation from base principles."
const channels_code =`  
using system; 
    protected float CurveChange()
    {
        float timeDivisor = Time.deltaTime / duration;
        float currentDurDivisor = currentDuration / duration;
        float val;
        if (reversed == false) 
            val = (curve.Evaluate(currentDurDivisor) - curve.Evaluate((currentDurDivisor - timeDivisor)));
            
        else
            val = (curve.Evaluate(currentDurDivisor) - curve.Evaluate((currentDuration + timeDivisor)));
        
        return val;
    }
        `

// const alamut_level ="Back in 2025, I was particularly enamored by the art of Mike Franchina, particularly his work on/with Trench Crusade. \
// I latched onto the story of Alamut, an assassin's mystic castle defended for centuries through secrecy, deception, and guile. The castle itself \
// was based around Turkish & Middle Eastern fortresses, and shared a name with the real life Alamut fortress in. \n\
// Still, I did plan out a large number of the interior & exterior structure, with significant amounts of creative liberty taken. \
// I had a large amount of room to flex creative muscles; an assassin's castle can have any number of secret passage ways, tricks, \
// traps and alternative pathways to traverse through for the enterprising or perceptive player.\n\
// I bit off significantly more than I could chew with this one, and never got beyond the planning stages, as I realized that without \
// mechanics to back it up, the level would serve no purpose, and have limited interactivity."

function SideProjectScroller({ children }: Props)
{
  return <><div className="ProjectScrollerBox">
    <div className = "ProjectScroller">
      {children}
    </div>
  </div></>
}


function SideProjects() {
  //const [count, setCount] = useState(0)

  return <>
  <OverlayWindow></OverlayWindow>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Descent into HELLForge</title>
  </head>
  <PageTemplate>
  
  {/* <LastButton buttonText="LAST" destination="strike_back"/><NextButton buttonText="NEXT" destination="codename_blazer"/> */}
      <ContentBlock>
        <section className="ContentRow">
          <div className="ContentTextHolder">
            <div className="ContentText"><h1>{title}</h1>
            <h2>Select below:</h2>
            <ScrollerButton titleID="Triplanar Texture"/>
            <ScrollerButton titleID="HK-47 Modeling"/>
            <ScrollerButton titleID="Additive Action Channels"/>
            <ScrollerButton titleID="ALAMUT Fortress"/>
            
            </div>
          </div>
          <SideProjectScroller>
            <div>
              <section className="ScrollerRow">
                <div className="ScrollerTextHolder"id='Triplanar Texture'>
                  <div className="ScrollHeader">Triplanar Stochastic Material</div>
                  {triplanarP}
                  <div className='TextSpacer'/>
                  
                </div>
                <div className="ScrollerVideoHolder">
                  <video className="resizeVid"  src="Triplanar/triplanarmaterial.mp4" no-controls autoPlay muted loop/>
                  
                </div>
              </section>
              <section className='ContentSpacer'/>
              <section className="ScrollerRow">
                <div className="ScrollerTextHolder"id='HK-47 Modeling'>
                  <div className="ScrollHeader">3D Modeling HK-47</div> {HK47P} 
                </div>
                <div className="ScrollerCarouselHolder">
                    <Carousel carouselID="HKCarousel" widthSet="100%">
                    <div className="TestSlide1"><img width="100%" height="100%" src="HK47/partialrough.png"/></div>
                    <div className="TestSlide2"><img width="100%" height="100%" src="HK47/completedrough.png"/></div>
                    <div className="TestSlide3"><img width="100%" height="100%" src="HK47/headinprogress.png"/></div>
                    <div className="TestSlide3"><img width="100%" height="100%" src="HK47/completedcleanup.png"/></div>
                    <div className="TestSlide3"><img width="100%" height="100%" src="HK47/finalizedmodel.png"/></div>
                    <div className="TestSlide3"><video no-controls autoPlay muted loop width="100%" height="100%" src="HK47/riggingtest.mp4" /></div>
                  </Carousel>
                </div>
              </section>
              <section className="ScrollerRow">
                <div className="ScrollerTextHolder"id='Additive Action Channels'>
                  <div className="ScrollHeader">Additive 'ActionChannels'</div> {action_channels}
                  <div className='TextSpacer'/>
                  
                </div>
                <div className="ScrollerTextHolder">
                  <OverlayTarget targetID="channels_code"><CodeSample code={channels_code}/></OverlayTarget>
                </div>
              </section>
              {/* <section className="ScrollerRow">
                <div className="ScrollerTextHolder"id='ALAMUT Fortress'>
                  <div className="ScrollHeader">Alamut Fortress Level</div>
                  {alamut_level}
                  <div className='TextSpacer'/>
                </div>
                <div className="ScrollerTextHolder">
                  {loremipsum}
                </div>
              </section> */}

              <section className="ScrollerRow">
                <div className="ScrollerTextHolder">
                </div>
                <div className="ScrollerTextHolder" id='Stochastic Texture'>
                </div>
              </section>
            </div>
          </SideProjectScroller>
        </section>
  </ContentBlock>
  </PageTemplate>
  </>
}

export default SideProjects