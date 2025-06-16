import HeaderBar from "../components/HeaderBar" 
import FooterBar from "../components/FooterBar";
import './BasicPageTemplate.css'
import { type ReactNode } from "react";

interface Props {
  children?: ReactNode
}

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