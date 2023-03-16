import React from 'react'
import BtnCard from './BtnCard'

export const BtnPages = ({page,longitud,setPage,typePag}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"20px",height:"50px"}}>
      {page === 0 ? "": <BtnCard side={"back"} Click={() => setPage(page - (typePag ? 15 : 20))} />}
      {page + (typePag ? 15 : 20) >= longitud ? "":<BtnCard side={"skip"} Click={() => setPage(page + (typePag ? 15 : 20))} />}
    </div>
  )
}
