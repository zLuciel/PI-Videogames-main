import React from 'react'
import { BtnCreate } from './filtro/BtnCreate'
import BtnGender from './filtro/BtnGender'
import BtnSort from './filtro/BtnSort'
import { Page } from './filtro/Page'

const Filtro = ({page,setPage,max}) => {
  return (
    <div className='filter' style={{display:"flex",columnGap:"10px",padding:"0 10px"}}>
      <BtnCreate/>
      <BtnGender/>
      <BtnSort/>
      <Page setPage={setPage} page={page} max={max} />
    </div>
  )
}

export default Filtro
