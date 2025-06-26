import { motion} from "motion/react"
import './HeaderLogoCard.css'



export default function HeaderLogoCard({})
{
  return<>
  <div className="HeaderCard">
    
    <div className="LogoHolder">
      <div className="Spacer"/>
      <motion.button  
      initial={{color:"black"}}
      animate={{color:"black"}}
      style={{
        textIndent:"400px"}}
      className="UpperButton"
      >
        <motion.div className="UpperButtonText">
        designer
        </motion.div>
      </motion.button>
      <motion.button 
      className="CentralButton"
      >
        steffen simmons
      </motion.button>
      <motion.button 
      style={{
        textIndent:"-275px"}}
      className="LowerButton"
      >
        <motion.div className="LowerButtonText">
        programmer
        </motion.div>
      </motion.button>
    </div>

  </div>

  </>
}