import React from 'react'
import { HomeContainer } from './css/Home'
import Gamers from './Gamers'
import Main from './Main'

export const Home = () => {
  return (
    <HomeContainer>
      <Main/>
      <Gamers/>
    </HomeContainer>
  )
}
