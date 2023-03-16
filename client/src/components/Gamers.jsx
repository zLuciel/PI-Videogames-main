import { useEffect,useState } from 'react'
import { GamersContainer } from './css/Gamer'
import Filtro from './Filtro'
import { GamerCards } from './GamerCards'
import {useDispatch, useSelector } from "react-redux";
import { getGames, getGeneros } from '../redux/actions/actions';
import { BtnPages } from './BtnPages';
import Anime from "../assets/anime2.gif"
const Gamers = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);
  const typePag = useSelector(state => state.typePag)

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [gamesToShow, setGamesToShow] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (allGames.length === 0) {
      dispatch(getGames());
      dispatch(getGeneros());
    }
  }, [allGames,dispatch]);

  useEffect(() => {
    if (allGames.length > 0 && Array.isArray(allGames)) {
       setGamesToShow(allGames.slice(page, page + (typePag ? 15 : 20)));
       setIsLoading(false);
    } else if(allGames === "NO") {
      setShowErrorMessage(true); 
    }

  }, [allGames, page,setIsLoading, setGamesToShow,typePag]);
  
  useEffect(() => {
    if (showErrorMessage) {
      const Mensaje = setTimeout(() => {
        setShowErrorMessage(false);
      }, 1000); 

      return () => clearTimeout(Mensaje); 
    }
  }, [showErrorMessage]);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={Anime} alt="loading" />
      </div>
    );
  }

  return (
    <>
    { showErrorMessage ? <h1 className='error'>No se pudo encontrar</h1> : <GamersContainer>
      <div className='flex'>
     <Filtro setPage={setPage} page={page} max={Math.ceil((allGames.length / 20))} />
      <div className="grid-gamers-card">
        {gamesToShow.map((data) => (
          <GamerCards
            key={data.id}
            genres={data.genres}
            img={data.image}
            id={data.id}
            rating={data.rating}
            released={data.released}
            name={data.name}
          />
        ))}
      </div>
      <BtnPages typePag={typePag} page={page} setPage={setPage} longitud={allGames.length} />
      </div>
    </GamersContainer>}
    </>
  );
};

export default Gamers

