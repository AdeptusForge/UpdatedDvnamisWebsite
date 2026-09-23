import { motion } from "framer-motion";
import './ScrollerButton.css'


function scrollfunc(value="") {
  const element = document.getElementById(value);
  if(element !== null)
    element.scrollIntoView();
}

function ScrollerButton({titleID=""})
{
  return <motion.button className="ScrollerButton" onClick={() => scrollfunc(titleID)}>{titleID}</motion.button>
}

export default ScrollerButton;