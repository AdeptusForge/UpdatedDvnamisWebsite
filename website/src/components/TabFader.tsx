import "./TabFader.css";
import "./Carousel.css";
import * as motion from "motion/react-client"
import { type ReactNode, useState, memo, useRef, Children} from "react";

interface Props {
  faderID: string
  children?: ReactNode
}


function TabFader({faderID}:Props)
{

const [activeTab, setActiveTab] = useState(-1);

  return (
    <div className="TabFader" id = {faderID}>
      <div className="TabsHolder">
      <motion.button className="TabButton" onClick= {() => setActiveTab(0)}>click HERE</motion.button>
      <motion.button className="TabButton" onClick = {() => setActiveTab(1)}>click HERE</motion.button>
      <motion.button className="TabButton" onClick = {() => setActiveTab(2)}>click HERE</motion.button>
      </div>
      <div className="TabContentHolder">
        <motion.div 
          className="TestSlide1"
          initial={{opacity:"0%"}}
          animate={{opacity: activeTab == 0 ? "100%" : "0%"}}
          transition={{duration: 0.2}}>
            <h5>stuff here</h5>
        </motion.div>
        <motion.div 
          className="TestSlide2"
          initial={{opacity:"0%"}}
          animate={{opacity: activeTab == 1 ? "100%" : "0%"}}
          style={{left:"-100%"}}
          transition={{duration: 0.2}}>
            <h5>stuff here</h5>
        </motion.div>
        <motion.div 
          className="TestSlide3"
          initial={{color:"0%"}}
          animate={{opacity: activeTab == 2 ? "100%" : "0%"}}
          style={{left:"-200%"}}
          transition={{duration: 0.2}}>
            <h5>stuff here</h5>
        </motion.div>
      </div>
    </div>
  );
}
export default TabFader;