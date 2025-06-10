import * as motion from "motion/react-client"
import viteLogo from '/vite.svg'
import DVNAMIS_BLACK from '/public/DVNAMIS-Logo-Black.svg'
import './HeaderBar.css'

function HeaderButton({buttonText="", image="", destination=""})
{
  return (
    <motion.button
      onClick={() => window.open("#/" + destination,"_self")}
      className="HeaderButton">
      <div className="buttonText" hidden={buttonText==""}><b>{buttonText}</b></div>
      <div className="buttonSpacer"></div>
    </motion.button>
  )
}

function HeaderLogoButton({buttonText="", image="", destination=""})
{
  return (
    <motion.button
      onClick={() => window.open("#/" + destination,"_self")}
      className="HeaderButton">
      <div className="buttonText" hidden={buttonText==""}>{buttonText}</div>
      <div className="buttonImageHolder" hidden={image==null}>
        <img className="buttonImage" src={image}/></div>
      
    </motion.button>
  )
}




export default function HeaderBar()
{
  return <div className="HeaderBar" id="myHeader">
      <HeaderLogoButton buttonText="" image={DVNAMIS_BLACK}/>
      <HeaderButton buttonText="about" destination="about"/>
      <HeaderButton buttonText="resume" destination="resume"/>
      <HeaderButton buttonText="contact" destination="resume"/>
    </div>
}