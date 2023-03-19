import React, { useEffect } from "react";
import { DetailsContainer, DetailsInfo } from "../components/css/Information";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";
import Anime from "../assets/anime2.gif"
const Information = () => {
  const Detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id !== Detail.id) {
      dispatch(getDetails(id))
      //setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id,dispatch]);

  
  if (String(Detail.id) !== id) {
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}}> <img src={Anime} alt="loading" /></div>;
  }

  return (
     <DetailsContainer img={Detail.image}>
      <div className="bg"></div>
      <div className="img-details">
        {/*<div className="play-ico">
          Fecha <b>{Detail.released}</b>
          <div>Rating <b>{Detail.rating}</b></div>
  </div>*/}
        <img src={Detail.image} alt="img" />
      </div>
      <DetailsInfo>
        <div className="center-details">
          <h1>{Detail.name.charAt(0).toUpperCase() + Detail.name.slice(1)}</h1>
          <p className="description" dangerouslySetInnerHTML={{ __html: Detail.description }}/>
          <div>
            <h3>Platform</h3>
            {Detail.platform && <p>{Detail.platform.join(" - ")}</p>}
          </div>
          <div>
            <h3>Genre</h3>
            {Detail.genres && <p>{Detail.genres.join(" - ")}</p>}
          </div>
          <div>
            <h3>Link</h3>
            <a href={Detail.website} target="_blank" rel="noreferrer">
              {Detail.website}
            </a>
          </div>
        </div>
      </DetailsInfo>
    </DetailsContainer>
  );
};

export default Information;
