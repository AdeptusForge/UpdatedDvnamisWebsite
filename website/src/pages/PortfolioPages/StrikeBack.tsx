import PageTemplate from "../BasicPageTemplate";
import { ContentBlock } from "../BasicPageTemplate";



const text = "here's some text"

export default function StrikeBackPage()
{
  return<>
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