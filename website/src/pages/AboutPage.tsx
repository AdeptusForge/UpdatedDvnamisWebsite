//import HeaderBar from "../components/HeaderBar";
import PageTemplate from "../pages/BasicPageTemplate";
import './AboutPage.css'
import { type ReactNode } from "react";
//import PortfolioPage from "./BasicPageTemplate";

interface Props {
  children?: ReactNode
}

function ContentBlock({ children }: Props)
{
    return(
    <section className="ContentBlock">{children}</section>)
}


//const text="A gamer for as long as he can remember, known better online as DVNAMIS. 
// A game builder, designer, and modder with several successful projects. 
// Grew up in Texas, moved to Washington, and still trying to figure out the rest. 
// Has worked on a wide variety of projects over the last 10 years, including 
// building game engines, writing shaders for artists, and fine-tuning combat systems. 
// Actively trying to make something truly unique. Started in Unity, gradually 
// moved to Unreal and landed on GODOT just recently. Die-hard indie developer, 
// but currently on hiatus because of the necessities of applying for higher-tier 
// game development positions. Two-time college graduate: Tarrant County Community 
// College & (shortly) Digipen Institute of Technology-having Bachelor’s simply opened 
// too many doors to ignore. If you need someone with extensive multidisciplinary 
// experience and deep knowledge on animation systems & level construction, 
// feel free to email me at: \n\ndvnamis@protonmail.com"

const text = 'I am Steffen Simmons, better known as DVNAMIS online. \
Bounced around a lot of places, trying to explore what I want out of \
the world and what I want out of the games I create. \
\n\n \
I have always \
wanted to explore new ideas and then use my games to teach others about \
the world. I want to expand the horizon for everyone by crafting worlds \
with tact and respect for the player. \
\n\n \
I have a deep love of learning as much as teaching - researching spider \
anatomy and 9th century Turkish architecture alongside exploring design \
principals and shader techniques. Learning about the world helps me to \
expand my understanding of players and gain alternate ways of thinking. \
\n\n \
In the future, I would love to experiment with novel gameplay structures \
as a method of expression beyond systematized mechanics. Then maybe a game about sailing...\
\n\n\n \
If you ever want to talk shop, feel free to contact me using one of these: \
<a href = "mailto:dvnamis@protonmail.com">Email (DVNAMIS@Protonmail.com)</a> \
\n \
<a href = "https://www.linkedin.com/in/steffen-simmons/">Message my LinkedIn</a> \
\n \
<a href = "https://discord.com/channels/@me">DM me on Discord: (.dvnamis)</a>'



const headerText = 'Designer & Programmer'
const title = 'About Me'

function AboutPage()
{
  return <>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | About</title>
  </head>
  <PageTemplate>
      <ContentBlock>
        <section className="ContentRow">
          <div className="ContentTextHolder">
            <div className="ContentText"><h1>{title}</h1><h2>{headerText}</h2><p dangerouslySetInnerHTML={{__html: text}}/> 
            </div>
            
          </div>
          <div className="ContentImageHolder"><img className="ContentImage" src="self_portrait.png"/></div>
        </section>

      </ContentBlock>
  </PageTemplate>
  </> 
}

export default AboutPage;