// @ts-nocheck
import viteLogo from '/vite.svg'
import { motion, useScroll, motionValue, number } from "motion/react"
import { useRef } from "react"
import './Scroll.css'

{/* <figure style={progressIconContainer}>
                    <svg
                        style={progressIcon}
                        width="75"
                        height="75"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            style={progressIconBg}
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="bg"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            style={{
                                ...progressIconIndicator,
                                pathLength: scrollYProgress,
                            }}
                        />
                    </svg>
                </figure> */}


export default function Item({title = "", destination = "https://www.dvnamis.games"}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    })
    return (
      <motion.button className="Bix" 
      ref={ref} 
      style={{ scaleY: scrollYProgress}} 
      animate={{rotateX: 0}}
      onClick={() => window.open(destination,"_self")}>
        <img src={viteLogo} className="logo react" alt="React logo" />
        {title}
      </motion.button>
    )
}

/**
 * ==============   Styles   ================
 */



const progressIconContainer: React.CSSProperties = {
    position: "sticky",
    top: 0,
    width: 80,
    height: 80,
    margin: 0,
    padding: 0,
}

const processCircle: React.CSSProperties = {
    strokeDashoffset: 0,
    strokeWidth: 5,
    fill: "none",
}

const progressIcon: React.CSSProperties = {
    ...processCircle,
    transform: "translateX(-100px) rotate(-90deg)",
    stroke: "#ff0088",
}

const progressIconIndicator: React.CSSProperties = {
    ...processCircle,
    strokeDashoffset: 0,
    strokeWidth: 5,
    fill: "none",
}

const progressIconBg: React.CSSProperties = {
    opacity: 0.2,
}

const item: React.CSSProperties = {
    width: 400,
    height: 400,
    border: "2px dotted #ff0088",
    position: "relative",
    marginLeft: 30,
    padding: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center"
}
