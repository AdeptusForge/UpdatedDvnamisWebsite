import "./Carousel.css";
import * as motion from "motion/react-client"

function CurrentSlidePosition(carouselID = "")
{
  const target = document.getElementById(carouselID)
  if(target !== null)
    {
      const pos = target.scrollLeft / (target?.scrollWidth / target?.children.length);
      return pos;
    }
    return 0;
}


function ScrollCarousel(carouselID = "", forward=false)
{
  const target = document.getElementById(carouselID)
  if(target !== null)
    {
      const scrollamount = target?.scrollWidth / target?.children.length
      const offsetScroll = scrollamount - target.scrollLeft;
      var finalAmount = scrollamount;
      if(offsetScroll % scrollamount != 0)
        {
          if(forward)
            finalAmount = scrollamount + offsetScroll
          else
            finalAmount = scrollamount - offsetScroll
        }
      if(forward)
        target.scrollBy(finalAmount, 0);
      else
        target.scrollBy(-finalAmount, 0);
      console.log(CurrentSlidePosition(carouselID));
    }
}

function NextButton({carouselID=""})
{
  return <motion.button className="CarouselButton" onClick={() => ScrollCarousel(carouselID, true)}>⮞</motion.button>
}
function BackButton({carouselID=""})
{
  return <motion.button className="CarouselButton" onClick={() => ScrollCarousel(carouselID, false)}>⮜</motion.button>
}

function Carousel({carouselID =""}) {
  return (
    <div className="CarouselBox">
      <div className="Carousel" id={carouselID}>
        <div className="TestSlide1" id="huh">
          <div>cool stuff</div>
          TextBox1
        </div>
        <div className="TestSlide2" id="wat">
          TextBox2
        </div>
        <div className="TestSlide3" id="who">
          TextBox3
        </div>
      </div>
        <div className="buttonHolder">
          <BackButton carouselID={carouselID}></BackButton>
          <div className="buttonSpacer"/>
          <NextButton carouselID={carouselID}></NextButton>
        </div>
    </div>
    )
}

export default Carousel;