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


const text="this is some text"

function AboutPage()
{
  return <>
  <PageTemplate>
      <ContentBlock>
        <section className="ContentRow">
          <div className="ContentTextHolder"><div className="ContentText">{text}</div></div>
          <div className="ContentImageHolder"><img className="ContentImage" src="websitekai.png"/></div>
        </section>
        <section className="ContentRow">
          <div className="ContentTextHolder"><div className="ContentText">{text}</div></div>
          <div className="ContentImageHolder"><img className="ContentImage" src="websitekai.png"/></div>
        </section>
      </ContentBlock>
      <ContentBlock>
        <section className="ContentRow">
          <div className="ContentTextHolder"><div className="ContentText">{text}</div></div>
          <div className="ContentImageHolder"><img className="ContentImage" src="websitekai.png"/></div>
        </section>
        <section className="ContentRow">
          <div className="ContentTextHolder"><div className="ContentText">{text}</div></div>
          <div className="ContentImageHolder"><img className="ContentImage" src="websitekai.png"/></div>
        </section>
      </ContentBlock>
  </PageTemplate>
  </> 
}

export default AboutPage;