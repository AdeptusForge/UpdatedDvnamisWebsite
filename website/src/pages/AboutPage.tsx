import HeaderBar from "../components/HeaderBar";
import { type ReactNode } from "react";
import './BasicPageTemplate.css'
import './AboutPage.css'

interface Props {
  children?: ReactNode
}

function ContentBlock({ children }: Props)
{
    return(
    <section className="ContentBlock">
    <div className="ContentText">{children}</div>
  </section>)
}

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lacinia odio. Sed aliquam tortor in felis blandit tristique. Vestibulum non tellus interdum, mollis lorem eget, facilisis sapien. Vestibulum ac rutrum metus. Ut blandit nisi enim, id ullamcorper nisl blandit a. Nulla facilisi. Integer libero nisi, commodo sit amet pulvinar nec, tempor at neque. Maecenas eget egestas eros, quis facilisis purus. Curabitur euismod urna sit amet eros ultrices, non pellentesque purus faucibus. Curabitur ut bibendum tellus, ut semper nunc. Aliquam sodales purus sit amet massa interdum, sit amet volutpat mi commodo. Maecenas finibus nisi in posuere fermentum. Sed nisl ex, lacinia vitae enim nec, mattis imperdiet ipsum. In vestibulum turpis et purus ultrices, eu sollicitudin dolor pulvinar. Curabitur pulvinar, nulla tempus sollicitudin molestie, ante dui viverra dui, et accumsan erat mauris eget augue. Nullam pellentesque lacinia rhoncus. Nunc nec neque dictum elit elementum blandit sollicitudin ac tellus. Pellentesque consectetur leo dui, at porta dui lobortis at. Phasellus et nunc at nunc cursus iaculis vitae non velit. Suspendisse nulla ipsum, malesuada in consectetur id, pulvinar id velit. Integer tristique ligula libero, at pellentesque nibh tempor a. Vestibulum pretium felis nec nibh pharetra suscipit. Ut turpis ante, dictum ut scelerisque at, rhoncus ac odio. Vestibulum vitae sapien metus. Donec hendrerit magna accumsan risus posuere porta. Etiam faucibus tempor quam, fermentum fringilla dolor congue eget. Vestibulum maximus ullamcorper ante a viverra. Duis at dui quam. Phasellus arcu metus, lobortis posuere sapien eget, egestas finibus sapien. Aenean et sollicitudin quam, non malesuada ipsum. Ut eleifend vestibulum felis a mattis. Donec augue est, congue sed libero vitae, aliquet placerat risus. Praesent nec urna semper, imperdiet leo ac, luctus lectus. Mauris commodo, nisi et varius elementum, ex elit semper leo, a blandit turpis magna at nisl. Ut commodo nec nulla ac aliquet. Integer arcu nulla, scelerisque vel interdum nec, vehicula sed ipsum. Nam nec posuere lectus."


function AboutPage()
{
  return <>
  <div className="PageEntry">
    <div className="BackgroundImage"></div>
    <HeaderBar/>
    <div className="PageContent">
      <ContentBlock><div>{text}</div></ContentBlock>
    </div>
  </div>
  </> 
}

export default AboutPage;