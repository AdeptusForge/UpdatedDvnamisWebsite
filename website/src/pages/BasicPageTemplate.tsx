import HeaderBar from "../components/HeaderBar" 
import FooterBar from "../components/FooterBar";
import './BasicPageTemplate.css'
import { type ReactNode } from "react";

interface Props {
  children?: ReactNode
}


const pages = ["WAKE", "Strike Back", "HELLFORGE", "Codename: BLAZER", "Burger Flippant", "DBFZ: KAI", "Omegatech", "Avagard's Study", "Under Red Sun Sands"]

export default function PageTemplate({ children }: Props)
{
    return<>
        <div className="PageEntry">
          <HeaderBar/>
          <div className="BackgroundImage">
          <div className="PageContent">{children}</div></div></div>
          <FooterBar/>
        </>
}