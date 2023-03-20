import { useEffect,useState } from 'react'
import { GamersContainer } from './css/Gamer'
import Filtro from './Filtro'
import { GamerCards } from '../components/GamerCards'
import {useDispatch, useSelector } from "react-redux";
import { getGames, getGeneros } from '../redux/actions/actions';
import { BtnPages } from './BtnPages';
import Loading from './Loading';
import useErrorMessage from "../hooks/useErrorMessage"
import usePages from '../hooks/usePages';
const Gamers = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);
  const typePag = useSelector(state => state.typePag)

  const [page, setPage] = useState(0);

  useEffect(() => {
    if (allGames.length === 0) {
      dispatch(getGames());
      dispatch(getGeneros());
    }
  }, [allGames, dispatch]);

  // slice
  const {gamesToShow, isLoading } = usePages(allGames, page, typePag,setPage);
  // mensaje 
  const showErrorMessage = useErrorMessage(allGames === 'NO', 1500);

  if (isLoading) return <Loading/>

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

