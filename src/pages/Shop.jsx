import { useEffect, useState } from 'react'
import { getCategories  , getFilteredProducts } from './core/apiCore'
import styled from 'styled-components'
import {categoriesData, popularProducts }  from '../data' //dummy data
import Checkbox from '../components/Checkbox'
import { fixedPrices } from '../data' 
import RadioBox from '../components/RadioBox'
import Product from '../components/Product'
const Shop = () => {
    const [myFilters , setMyFilters] = useState({
        filters: {category: [], price: []},
    })
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [filteredResults , setFilteredResults] = useState([])
    const init = () => {
      // getCategories.then(data => {
      //   if (data.error) {
      //       setError(data.error)
      //   } else {
      //       setCategories(data)
      //   }
      // }) 
      setCategories(categoriesData)
    }
    const loadFilteredResults = (newFilters) => {
      getFilteredProducts(skip, limit, newFilters).then(data => {
        if (data.error) {
          console.log(data.error)
        } else {
          setFilteredResults(popularProducts)
        }
      })
    }
    useEffect(() => {
      init()
      loadFilteredResults(skip, limit, myFilters.filters) 
    },[])
    const handleFilters = (filters , filterBy) => {
      const newFilters = {...myFilters}
      newFilters.filters[filterBy] = filters
      if(filterBy === 'price') {
          let priceValues = handlePrice(filters)
          newFilters.filters[filterBy] = priceValues
      }
      loadFilteredResults(newFilters)
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
        {popularProducts.map((product, i) => (  // data should be here not dummy data
        <Product key={i} {...product} />
        )) 
        }  
      {filteredResults.map((product, i) => (  // after selcetion of filters
        <Product key={i} {...product} />
      ))}
    </Content>
    </Container>
  )
}

export default Shop
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4em 2em;
`
const Filter = styled.aside`
  display: flex;
  flex-direction: column;
  margin-right: 3em;
  width: 22%;
`
const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5em;
`
const Content = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-x: auto;
  margin-bottom: 2em;
`
const FilterWrapper = styled.div``