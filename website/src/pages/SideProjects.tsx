
import './MainPage.css'

import '../components/Collapsible.css'

import PageTemplate from "./BasicPageTemplate";
import { ContentBlock, TextOnlySection } from "./BasicPageTemplate";
import './BasicPageTemplate.css'
import { LastButton, NextButton } from "../components/NextLastButton";
import { type ReactNode } from "react";
import './SideProjects.css'

interface Props {
  children?: ReactNode
}

function scrollfunc() {
  const element = document.getElementById("bigbigapple");
  if(element !== null)
    element.scrollIntoView();
}



const title = "SIDE PROJECTS"
const loremipsum = "lorem ipsum dolor sit amet consectetur adipiscing elit aliqua cupiditate omnis cillum corrupti elit minim at autem in est deserunt harum sit ducimus mollitia consequatur consequat officia officia corrupti sint officia et fugiat nulla consequat ipsum officia ad voluptas at lorem in qui molestias vel quis et dolor nulla aute do officia ut fugiat soluta eiusmod distinctio est deserunt quis quod nam voluptatum accusamus dolore ut ad est in cupidatat animi pariatur eu id repellendus similique quidem praesentium nobis similique ut occaecat et duis odio repellendus dignissimos qui officia distinctio cum fugiat at eos illum cumque repellendus autem dolore dolorum irure tempore qui id qui fugiat omnis dolores et atque ducimus in dolor molestias et cum et qui magna qui nulla soluta voluptas minus libero deserunt in iusto provident enim iusto voluptas omnis occaecat qui dolorum facilis cillum culpa officia ut occaecat nam ipsum aute commodo excepturi quo quis animi mollitia laborum quos deserunt voluptate et exercitation praesentium corrupti consequat dolor provident laboris veniam sunt lorem ipsum dolor sit amet consectetur adipiscing elit aliqua cupiditate omnis cillum corrupti elit minim at autem in est deserunt harum sit ducimus mollitia consequatur consequat officia officia corrupti sint officia et fugiat nulla consequat ipsum officia ad voluptas at lorem in qui molestias vel quis et dolor nulla aute do officia ut fugiat soluta eiusmod distinctio est deserunt quis quod nam voluptatum accusamus dolore ut ad est in cupidatat animi pariatur eu id repellendus similique quidem praesentium nobis similique ut occaecat et duis odio repellendus dignissimos qui officia distinctio cum fugiat at eos illum cumque repellendus autem dolore dolorum irure tempore qui id qui fugiat omnis dolores et atque ducimus in dolor molestias et cum et qui magna qui nulla soluta voluptas minus libero deserunt in iusto provident enim iusto voluptas omnis occaecat qui dolorum facilis cillum culpa officia ut occaecat nam ipsum aute commodo excepturi quo quis animi mollitia laborum quos deserunt voluptate et exercitation praesentium corrupti consequat dolor provident laboris veniam sunt"




function SideProjectScroller({ children }: Props)
{
  return <><div className="ProjectScrollerBox">
    <div className = "ProjectScroller">
      {children}
    </div>
  </div></>
}


function SideProjects() {
  //const [count, setCount] = useState(0)

  return <>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>| DVNAMIS | Descent into HELLForge</title>
  </head>
  <PageTemplate>
  {/* <LastButton buttonText="LAST" destination="strike_back"/><NextButton buttonText="NEXT" destination="codename_blazer"/> */}
      <ContentBlock>
        <section className="ContentRow">
          <div className="ContentTextHolder">
            <div className="ContentText"><h1>{title}</h1><h2>Select below:</h2><a onClick={scrollfunc}>Click here</a></div>
          </div>
          <SideProjectScroller>
            <div>
              <section className="ContentRow">
                <div className="ScrollerTextHolder">
                  {loremipsum}
                </div>
                <div className="ScrollerTextHolder">
                  {loremipsum}
                </div>
              </section>
              {loremipsum}{loremipsum}
              <section className="ContentRow">
                <div className="ScrollerTextHolder">
                  {loremipsum}
                </div>
                <div className="ScrollerTextHolder"id='bigbigapple'>
                  {loremipsum}
                </div>
              </section>
            </div>
            
          </SideProjectScroller>
        </section>
  </ContentBlock>
  </PageTemplate>
  </>
}

export default SideProjects