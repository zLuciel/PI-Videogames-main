import React  from 'react'
import { CardsContainer, ImgCard, InfoCard } from './css/GamerCards'
import { useNavigate } from 'react-router-dom';
export const GamerCards = ({img,rating,released,name,id,genres}) => {
    const Navigate = useNavigate()
   
    const handleDetails= ()=>{
        Navigate(`/details/${id}`)
    }
  return (
    <CardsContainer>
        <div className='center-div-card-flex'>
            <ImgCard>
                <img src={img} alt={name} />
            </ImgCard>
            <InfoCard>
                <h3>{name}</h3>
                <p className='rating'>{rating} Ratings</p>
                <span className='fecha-card'><p>Date</p>: <p>{released}</p></span>
                {<p className='genres-card'>{genres.length && genres.join(" - ")}</p>}
                <span className='icon-star'>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                </span>
                <div className='btn-content'>
                    <button onClick={handleDetails}>View info</button>
                </div>
            </InfoCard>
        </div>
    </CardsContainer>
  )
}
