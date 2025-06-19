import './NextLastButton.css'
import * as motion from "motion/react-client"


export function NextButton({buttonText ="", destination=""})
{
  return<>
    <div className="NextButtonHolder">
      <motion.button
        onClick={() => window.open("#/" + destination,"_self")}
        className="SequenceButton">
        <div className="NextButtonText">{buttonText}</div>
        <div className="NextButtonGraphic"/>
      </motion.button>
    </div>
  </>
}


export function LastButton({buttonText ="",destination=""})
{
  return<>
    <div className="LastButtonHolder">
      <motion.button
        onClick={() => window.open("#/" + destination,"_self")}
        className="SequenceButton">
        <div className="LastButtonText">{buttonText}</div>
        
        <div className="LastButtonGraphic"></div>
      </motion.button>
    </div>
  </>
}