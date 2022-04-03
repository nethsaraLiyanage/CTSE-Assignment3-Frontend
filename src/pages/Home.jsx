import {useState , useEffect} from 'react'
import styled from 'styled-components'
import Slider from '../components/Slider'
import Categories from './Categories'
import Sale from '../components/Sale'
import NewArrivals from '../components/NewArrivals'
import { getProducts } from './apiCore'
const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)
    const loadProductsBySell = () => {
      getProducts('sold').then(data => {
        if(data.error) {
          setError(data.error)
        } else {
          setProductsBySell(data)
        }
      })}
    const loadProductsByArrival = () => {
      getProducts('createdAt').then(data => {
        if(data.error) {
          setError(data.error)
        } else {
          setProductsByArr(data)
        }
      })}
  return (
    <HomeContainer>
      <Slider />
      <Categories />
      <Sale productsBySell={productsBySell} loadProductsBySell={loadProductsBySell} />
      <NewArrivals productsByArrival={productsByArrival} loadProductsByArrival={loadProductsByArrival} />
    </HomeContainer>
  )
}

export default Home
const HomeContainer = styled.main`
max-width: 80%;
margin: 0 auto;
`