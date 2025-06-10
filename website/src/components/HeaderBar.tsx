import * as motion from "motion/react-client"
import viteLogo from '/vite.svg'
import './HeaderBar.css'

function HeaderButton({buttonText="", image="", destination=""})
{
  return (
    <motion.button
      onClick={() => window.open("#/" + destination,"_self")}
      className="HeaderButton">
      <div className="buttonText" hidden={buttonText==""}>{buttonText}</div>
      <div className="buttonImage" hidden={image==null}>
        <img className="buttonImage" src={image}/></div>
      
    </motion.button>
  )
}




export default function HeaderBar()
{
  return <div className="HeaderBar" id="myHeader">
      <HeaderButton buttonText="" image={viteLogo}/>
      <HeaderButton buttonText="ABOUT" destination="about"/>
      <HeaderButton buttonText="RESUME" destination="resume"/>
      <HeaderButton buttonText="CONTACT" destination="resume"/>
    </div>
}