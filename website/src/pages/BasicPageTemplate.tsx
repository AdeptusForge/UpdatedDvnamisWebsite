import HeaderBar from "../components/HeaderBar" 
import './BasicPageTemplate.css'
import { type ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export default function PageTemplate({ children }: Props)
{
    return(
        <div className="PageEntry">
          <div className="BackgroundImage"></div>
          <HeaderBar/>
          <div className="PageContent">{children}</div></div>)
}