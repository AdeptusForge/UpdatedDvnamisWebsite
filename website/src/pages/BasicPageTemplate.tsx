import HeaderBar from "../components/HeaderBar" 
import FooterBar from "../components/FooterBar";
import './BasicPageTemplate.css'
import { type ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export function ContentBlock({ children }: Props)
{
    return(
    <section className="ContentBlock">{children}</section>)
}

export function FullVideoBlock()
{
  return <>
  <ContentBlock>

  </ContentBlock>
  </>
}

export function TextOnlySection({header='', paragraph=''})
{
  return <>
      <section className="ContentRow">
        <div className="ContentTextHolder">
          <div className="ContentText"><h1>{header}</h1><p dangerouslySetInnerHTML={{__html: paragraph}}/></div>
        </div>
      </section>
  </>
}


//const pages = ["WAKE", "Strike Back", "HELLFORGE", "Codename: BLAZER", "Burger Flippant", "DBFZ: KAI", "Omegatech", "Avagard's Study", "Under Red Sun Sands"]

export default function PageTemplate({ children }: Props)
{
    return<>
        <div className="PageEntry">

          <div className="BackgroundImage">
          <HeaderBar/>
          <div className="PageContent">{children}
            </div>
            
          </div>
          <FooterBar/>
        </div>
        
        </>
}