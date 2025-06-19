import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";
import '../BasicPageTemplate.css'
import Expandable from "../../components/Expandable";
import { LastButton, NextButton } from "../../components/NextLastButton";

const title = "Strike Back"
const introductionDetails = "August 2022 - April 2024 \n FOWL Custom Engine (C++)"
const introduction = "Strike Back is a 2D traditional ground-based fighting game I developed over the course of 8 months with a team of 19 members. I was designated as Technical Lead of the project, and was responsible for engine & tools development, building graphics and animation pipelines, and managing the programming department."

const responsibilities = "> Architectural Programming\n> Graphics Pipeline Development\n> Technical Documentation \n> Animation Tools\n> Programmer Management and organization\n> Feature Timelining"
// const roles = "Level Design"

const paragraph1 = ""
const header1= ""
const paragraph2 = ""


const header2 = ""
const paragraph3 = ""

const header3 = ""
const paragraph4 = ""


export default function StrikeBackPage()
{
  return<>
  <PageTemplate>
    <LastButton buttonText="LAST" destination="wake"/><NextButton buttonText="NEXT" destination="descent_into_hellforge"/>
    <ContentBlock>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{title}</h1><h2>{introductionDetails}</h2><p>{introduction} <Expandable title="My Responsibilities" text={responsibilities}></Expandable></p></div>
        </div>
        <div className="ContentImageHolder">
          <embed src="https://www.youtube.com/embed/d7UgyWLVeNI?si=UKlCPoa-Ap5VM4vp" />
        </div>
      </section>

      
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><p>{paragraph1}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentImageHolder">
          <img className="ContentImage" src="StrikeBack/Screenshot_02.png"/>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header1}</h1><p>{paragraph2}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header2}</h1><p>{paragraph3}</p></div>
        </div>
      </section>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header3}</h1><p>{paragraph4}</p></div>
        </div>
      </section>
    </ContentBlock>
  </PageTemplate>
  </>
}