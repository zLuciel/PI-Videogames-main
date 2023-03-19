import React from 'react'
import { HomeContainer } from '../components/css/Home'
import Gamers from '../components/Gamers'
import Main from '../components/Main'

export const Home = () => {
  return (
    <HomeContainer>
      <Main/>
      <Gamers/>
    </HomeContainer>
  )
}
