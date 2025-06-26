import { motion} from "motion/react"
import './HeaderLogoCard.css'



export default function HeaderLogoCard({})
{
  return<>
  <div className="HeaderCard">
    <div className="LogoHolder">
      <motion.button  
      style={{
        textIndent:"100px"}}
      className="UpperButton"
      >
        designer
      </motion.button>
      <motion.button 
      className="CentralButton"
      >
        steffen simmons
      </motion.button>
      <motion.button 
      style={{
        textIndent:"-100px"}}
      className="LowerButton"
      >
        programmer
      </motion.button>
    </div>

  </div>

  </>
}