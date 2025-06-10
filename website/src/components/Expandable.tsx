import './Expandable.css'
import { motion } from "framer-motion";
import { useState } from 'react';



function Expandable({title=""})
{
  const [isOpen, setIsOpen] = useState(false);
  return <div className="ExpandHolder">
  <motion.button 
  className="ExpandButton" 
  // initial={{height:"100px"}}
  // animate={{height: isOpen ? "200px" : "100px"}}
  // transition={{ duration: 0.55}}
  onClick={() => setIsOpen(!isOpen)}
  >
    {title + " Click To Expand"}
  </motion.button>
  <motion.div 
  className="ExpandText"
  initial={{height:"0px"}}
  animate={{height: isOpen ? "200px" : "0px"}}
  transition={{ duration: 0.55}}>
    Here's some lorem ipsum Here's some lorem ipsum Here's some lorem ipsum
  </motion.div>
  </div>
}


export default Expandable