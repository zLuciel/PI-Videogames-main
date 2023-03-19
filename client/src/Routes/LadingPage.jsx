import {useState,useRef,useEffect} from 'react'
import { Circulo, ContainerLading } from '../components/css/LadingPage'
import { useNavigate} from "react-router-dom";
import Paisaje from "../assets/paisaje2.jpg"
import Paisaje1 from "../assets/paisaje.jpg"
import Maga1 from "../assets/VAGANANDO4.png"
import Shi from "../music/shi.mp3"

const LadingPage = () => {

   
    const navigate = useNavigate()
    const handleHome = ()=> navigate("/home")

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(Shi));

    useEffect(() => {
      const audio = audioRef.current;
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }, []);
    
    const handlePlay = () => {
      setIsPlaying(true);
      audioRef.current.play();
    };
  
    const handlePause = () => {
      setIsPlaying(false);
      audioRef.current.pause();
    };

   
  return (
    <ContainerLading Paisaje={Paisaje} Texto={Paisaje1}>
        <div className='fondo'></div>
        <div className='title-lading'>Game start</div>
        <div className='play'>{isPlaying ?<i onClick={handlePause} className="fa-regular fa-circle-pause icon-play"></i>:<i onClick={handlePlay} className="fa-regular fa-circle-play icon-play"></i>} <div></div><i  className="fa-regular fa-circle-play "></i></div>
        <div className="maga">
        <img src={Maga1} alt="" />
        </div>
        <button onClick={handleHome} className="home">Get Into</button>
      <Circulo>
        <div className='circuloInterno'></div>
      </Circulo>
     
    </ContainerLading>
  )
}

export default LadingPage
