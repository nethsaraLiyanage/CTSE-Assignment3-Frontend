import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Slider'
import Categories from './Categories'
import Sale from '../components/Sale'
import NewArrivals from '../components/NewArrivals'
const Home = () => {
  
  return (
    <HomeContainer>
      <Slider />
      <Categories />
      <Sale />
      <NewArrivals />
    </HomeContainer>
  )
}

export default Home
const HomeContainer = styled.main`
max-width: 80%;
margin: 0 auto;
`