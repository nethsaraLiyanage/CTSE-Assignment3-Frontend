import { useEffect, useState } from 'react'
import { getCategories } from './apiCore'
import styled from 'styled-components'
import {categoriesData }  from '../data' //dummy data
import Checkbox from '../components/Checkbox'
import { fixedPrices } from '../data' 
import RadioBox from '../components/RadioBox'
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
      const newFilters = {...myFilters}
      newFilters.filters[filterBy] = filters
      if(filterBy === 'price') {
          let priceValues = handlePrice(filters)
          newFilters.filters[filterBy] = priceValues
      }
      setMyFilters(newFilters)
  }
  const handlePrice = (value) => {
      const data = fixedPrices
      let array = []
      for(let key in data) {
          if(data[key].id === parseInt(value)) {
              array = data[key].array
          }
      }
      return array
  }

  return (
    <Container>
      <Filter>
        <FilterWrapper>
          <Title>Filter By Categories</Title>
          <Checkbox 
            categories={categories} 
            handleFilters={(filters) => handleFilters(filters,'category')} 
          />
        </FilterWrapper>
        <FilterWrapper>
          <Title>Filter By Price</Title>
          <RadioBox   
            fixedPrices={fixedPrices}
            handleFilters={(filters) => handleFilters(filters,'price')} 
          />
        </FilterWrapper>
      </Filter>
    <Content>
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
const FilterWrapper = styled.div``