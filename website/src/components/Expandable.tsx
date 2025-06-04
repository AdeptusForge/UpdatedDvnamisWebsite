import './Expandable.css'
import { motion } from "framer-motion";
import { useState } from 'react';


function Expandable()
{
  const [isOpen, setIsOpen] = useState(false);
  return <motion.button 
  className="ExpandButton" 
  initial={{height:"100px"}}
  animate={{height: isOpen ? "200px" : "100px"}}
  onClick={() => setIsOpen(!isOpen)}>
    { isOpen ? "Here's some text lol": "Empty"} 
  </motion.button>
}


export default Expandable