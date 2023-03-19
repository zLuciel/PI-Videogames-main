import {useEffect, useRef,useState} from 'react'
import { BtnSlider, ContainerSlider, ContainerSlideShow, Slide } from './css/SliderAut'

import img1 from "../assets/cyber.jpg"
import img2 from "../assets/cybers.jpg"
import img3 from "../assets/God.jpg"
import img4 from "../assets/Halo.jpg"

 const SliderAut = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshow = useRef(null);

  const updateSlidePosition = (slideIndex) => {
    setCurrentSlide(slideIndex);
    slideshow.current.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.current.style.transition = "transform 400ms ease-out";
  };

  const handlePlay=()=>{
    let video;
    if(currentSlide === 0 ) video = "https://www.youtube.com/watch?v=rFh2i4AlPD4"
    if(currentSlide === 1 ) video = "https://www.youtube.com/watch?v=K78U0I4l7R0&t"
    if(currentSlide === 2 ) video = "https://www.youtube.com/watch?v=Xq9X-Q-b4hY&t"
    if(currentSlide === 3 ) video = "https://www.youtube.com/watch?v=AN3jEjjcZ-k&t"
    const newTab = window.open(video, "_blank");
    newTab.focus();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentSlide + 1) % 4;
      updateSlidePosition(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <ContainerSlider>
      <ContainerSlideShow ref={slideshow}>
      <Slide>
          <img src={img4} alt="Halo"  />
        </Slide>
        <Slide>
          <img src={img1} alt="Overwatch" />
        </Slide>
        <Slide>
          <img src={img2} alt="GodOfWard" />
        </Slide>
        <Slide>
          <img src={img3} alt="Cyber"  />
        </Slide>
      </ContainerSlideShow>
      <BtnSlider>
        <ul>
          <li className={currentSlide === 0 ? "active" : ""} onClick={() => updateSlidePosition(0)}></li>
          <li className={currentSlide === 1 ? "active" : ""} onClick={() => updateSlidePosition(1)}></li>
          <li className={currentSlide === 2 ? "active" : ""} onClick={() => updateSlidePosition(2)}></li>
          <li className={currentSlide === 3 ? "active" : ""} onClick={() => updateSlidePosition(3)}></li>
        </ul>
      </BtnSlider>
      <i className="fa-brands fa-youtube play-main" onClick={handlePlay}></i>
    </ContainerSlider>
  );
};
export default SliderAut