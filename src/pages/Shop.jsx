import { useEffect, useState } from 'react'
import { getCategories } from './apiCore'
import styled from 'styled-components'
import Categories from './Categories'
import {categoriesData }  from '../data' //dummy data
import Checkbox from '../components/Checkbox'
import { fixedPrices } from '../data' //dummy data
const Shop = () => {
    const [myFilters , setMyFilters] = useState({
        filters: {category: [], price: []},
    })
    const [categories, setCategories] = useState([])
    // const [error, setError] = useState(false)
    const init = () => {
    //  getCategories.then(data => {
    //      if (data.error) {
    //          setError(data.error)
    //      } else {
    //          setCategories(data)
    //      }
    // }) 
     setCategories(categoriesData)
   }
   useEffect(() => {
    init()
   },[])
   const handleFilters = (filters , filterBy) => {
     // console.log("shop",filters , filterBy)
     const newFilters = {...myFilters}
     newFilters.filters[filterBy] = filters
     setMyFilters(newFilters)
   }
  return (
    <Container>
      <Filter>
        <Title>Filter By Categories</Title>
        <Checkbox 
         categories={categories} 
         handleFilters={(filters) => handleFilters(filters,'category')} />
      </Filter>
     <Content>
       {/* <Categories categories={categories}/> */}
       {JSON.stringify(myFilters)}
     </Content>
    </Container>
  )
}

export default Shop
const Container = styled.div`
/* max-width: 80%; */
/* margin: 0 auto; */
display: flex;
justify-content: space-between;
margin: 4em 2em;
`
const Filter = styled.aside`
 display: flex;
 flex-direction: column;
 
`
const Title = styled.h4`
margin-top: 0;
`
const Content = styled.main`
 display: flex;
 flex-direction: column;
`