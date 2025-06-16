import HeaderBar from "../components/HeaderBar";
import './BasicPageTemplate.css'
import './AboutPage.css'
import { type ReactNode } from "react";
import PortfolioPage from "./BasicPageTemplate";
import PageTemplate from "./BasicPageTemplate";

interface Props {
  children?: ReactNode
}

function ContentBlock({ children }: Props)
{
    return(
    <section className="ContentBlock">{children}</section>)
}


const text="A gamer for as long as he can remember, known better online as DVNAMIS. A game builder, designer, and modder with several successful projects. Grew up in Texas, moved to Washington, and still trying to figure out the rest. Has worked on a wide variety of projects over the last 10 years, including building game engines, writing shaders for artists, and fine-tuning combat systems. Actively trying to make something truly unique. Started in Unity, gradually moved to Unreal and landed on GODOT just recently. Die-hard indie developer, but currently on hiatus because of the necessities of applying for higher-tier game development positions. Two-time college graduate: Tarrant County Community College & (shortly) Digipen Institute of Technology-having Bachelor’s simply opened too many doors to ignore. If you need someone with extensive multidisciplinary experience and deep knowledge on animation systems & level construction, feel free to email me at: dvnamis@protonmail.com"

function AboutPage()
{
  return <>
  <PageTemplate>
      <ContentBlock>
        <section className="ContentRow">
          <div className="ContentTextHolder"><div className="ContentText">{text}</div></div>
          <div className="ContentImageHolder"><img className="ContentImage" src="self_portrait.png"/></div>
        </section>
      </ContentBlock>
  </PageTemplate>
  </> 
}

export default AboutPage;