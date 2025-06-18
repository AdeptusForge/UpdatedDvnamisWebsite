import './Expandable.css'
import { motion } from "framer-motion";
import { useState } from 'react';

function ButtonText (open:boolean)
{
  return open ? " \n <   Collapse   >" : " \n >   Expand   <";
}

function Expandable({title="",image="", text=""})
{
  const [isOpen, setIsOpen] = useState(false);
  return <div className="ExpandHolder">
  <img className="ExpandImage" src={image}></img>
  <motion.button 
  className="ExpandButton" 
  // initial={{height:"100px"}}
  // animate={{height: isOpen ? "200px" : "100px"}}
  // transition={{ duration: 0.55}}
  onClick={() => setIsOpen(!isOpen)}>
    <b>{title}</b>{"" + ButtonText(isOpen)}
  </motion.button>
  <motion.div 
  className="ExpandText"
  initial={{height:"0px"}}
  animate={{height: isOpen ? "auto" : "0px"}}
  transition={{duration: 0.4}}>
    <p>{text}</p>
  </motion.div>
  </div>
}

export default Expandable