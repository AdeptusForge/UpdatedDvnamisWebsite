import '../components/OverlayWindow.css'

import { type ReactNode, useEffect, Children, cloneElement} from "react";
import * as motion from "motion/react-client"

import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

/**
 * Converts a ReactNode into a native browser DOM Node
 */
export function reactNodeToDOMNode(reactNode: ReactNode): Node {
  // 1. Create a detached DOM element container
  const container = document.createElement('div');
  const root = createRoot(container);

  // 2. Force React to render the node synchronously
  flushSync(() => {
    root.render(reactNode);
  });

  // 3. Extract and return the underlying native DOM node(s)
  // If the ReactNode rendered a single element, return it.
  // Otherwise, return the container itself or its child nodes.
  return container.firstChild || container;
}

interface Props {
  children?: ReactNode
}
interface Pass{
  children?: ReactNode
}

interface Target{
  targetID: string
  children?: ReactNode
}

function OpenOverlay(targetID:string)
{
  const target = document.getElementById(targetID);
  const w = document.getElementById("overlaywindow");
  const subw = document.getElementById("suboverlaywindow");
  const button = document.getElementById("overlayClose");

  if(w != null && target != null && subw != null && button != null)
  {
    button.style.display = "block";
    w.style.display = "block";
    w.focus();
    const windowcontent = target.cloneNode(true);
    subw.replaceChildren(windowcontent)
  }
}
function CloseOverlay()
{
  const w = document.getElementById("overlaywindow");
  const button = document.getElementById("overlayClose");

  if(w != null && button != null)
  {
    w.style.display = "none";
    button.style.display = "none";
  }
}

export default function OverlayWindow()
{
  
  return(
    <div>
    <div className="OverlayWindow" id="overlaywindow">
          <div className="ContentHolder" id="suboverlaywindow"></div>
        </div>
      <button className="OutsideOverlay" id ="overlayClose" onClick={()=> CloseOverlay()}>
    </button>
    </div>

)
}

export function OverlayTarget({targetID, children}:Target)
{
  return(
    <motion.button className="OverlayTargetButton" onClick={() => OpenOverlay(targetID)}>

      <div className="TargetContent" id ={targetID}>
              {children}
      </div>
      <div className="OverlayButtonText">
      expand
      </div>
    </motion.button>
  )
}