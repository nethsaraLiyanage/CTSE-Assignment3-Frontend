import {useState , useEffect} from 'react'
import styled from 'styled-components'
import { getProducts } from './core/apiCore'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import NewArrivals from '../components/NewArrivals'
import Sale from '../components/Sale'
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
          setProductsByArrival(data)
        }
      })}
  return (
    <HomeContainer>
      <Slider />
      <Categories />
      <Sale 
        productsBySell={productsBySell} 
        loadProductsBySell={loadProductsBySell} 
      />
      <NewArrivals 
        productsByArrival={productsByArrival} 
        loadProductsByArrival={loadProductsByArrival}
      />
    </HomeContainer>
  )
}

export default Home
const HomeContainer = styled.main`
max-width: 80%;
margin: 0 auto;
`