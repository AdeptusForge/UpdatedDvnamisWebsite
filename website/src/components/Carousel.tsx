import "./Carousel.css";
import * as motion from "motion/react-client"
import { type ReactNode, useState, useEffect } from "react";



interface Props {
  carouselID: string
  children?: ReactNode
  widthSet: string
}

function CurrentSlidePosition(carouselID = "")
{
  const target = document.getElementById(carouselID)
  if(target !== null)
    {
      const pos = Math.round(target.scrollLeft / (target.scrollWidth / target.children.length));
      console.log(pos);
      return pos;
    }
    return 0;
}


// function ScrollCarousel(carouselID = "", forward=false)
// {
//   const target = document.getElementById(carouselID)
//   if(target !== null)
//     {
//       const scrollamount = target?.scrollWidth / target?.children.length
//       const offsetScroll = scrollamount - target.scrollLeft;
//       var finalAmount = scrollamount;
//       if(offsetScroll % scrollamount != 0)
//         {
//           if(forward)
//             finalAmount = scrollamount + offsetScroll
//           else
//             finalAmount = scrollamount - offsetScroll
//         }
//       if(forward)
//         target.scrollBy(finalAmount, 0);
//       else
//         target.scrollBy(-finalAmount, 0);
//     }
// }

function CarouselFix({carouselID=""})
{
  const target = document.getElementById(carouselID)
}

function ScrollCarouselTo(carouselID = "", slideNum = 0)
{
  const target = document.getElementById(carouselID)
  if(target != null)
  {
    const pos = CurrentSlidePosition();
    const scrollamount = target?.scrollWidth / target?.children.length
    target.scrollTo(slideNum * scrollamount, 0);
  }

}

function NextButton({carouselID=""})
{
  return <motion.button className="CarouselButton" onClick={() => ScrollCarouselTo(carouselID, CurrentSlidePosition(carouselID) + 1)}>⮞</motion.button>
}
function BackButton({carouselID=""})
{
  return <motion.button className="CarouselButton" onClick={() => ScrollCarouselTo(carouselID, CurrentSlidePosition(carouselID) - 1)}>⮜</motion.button>
}
function ProgressButton({carouselID="", slideNum=0})
{
  return <motion.button className="ProgressButton" onClick={() => ScrollCarouselTo(carouselID, slideNum)}>■</motion.button>
}

function Carousel({carouselID, children, widthSet}:Props) {
  useEffect(() => 
    {
    let timeoutId = 0;
    const CarouselFix = () =>
      {
        // Clear the previous timer if the user is still actively resizing
        clearTimeout(timeoutId);

        // Set a new timer to execute your function after 150ms of inactivity
          timeoutId = setTimeout(() => {
          ScrollCarouselTo(carouselID, CurrentSlidePosition(carouselID))
          // Put your actual custom logic here
        }, 10);
    }

  window.addEventListener("resize", CarouselFix);

  return () => 
    {
      window.removeEventListener("resize", CarouselFix);
      clearTimeout(timeoutId);
    }
    })

  return (
    <div className="CarouselBox" style={{width: widthSet}}>
      <div className="Carousel" id={carouselID}>
        {children}
      </div>
        <div className="buttonHolder">
          <BackButton carouselID={carouselID}></BackButton>
          <div className="buttonSpacer"/>
          <NextButton carouselID={carouselID}></NextButton>
        </div>
        <div className="ProgressHolder">
          <ProgressButton carouselID={carouselID} slideNum={0}/>
          <ProgressButton carouselID={carouselID} slideNum={1}/>
          <ProgressButton carouselID={carouselID} slideNum={2}/>
        </div>
    </div>
    )
}

export default Carousel;