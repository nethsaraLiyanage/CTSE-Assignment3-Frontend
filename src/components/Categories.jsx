import React  from 'react'
import {categoriesData }  from '../data' //dummy data
import styled from 'styled-components'
import { Link , useLocation } from 'react-router-dom'
const Categories = ({categories}) => {
  const NavStyles ={
    textDecoration: 'none' , 
    color: '#000',
  }
  const CategoryElements = categoriesData.map((category) => {
    return(
      <Link  to={`/${category.name}`}
        style={NavStyles}
        key={category.id}
      >
        <Category >
          <CategoryImage src={category.image}/>
          <CategoryName>{category.name}</CategoryName>
        </Category>
      </Link>
      
    )
  })
  return (
    <Wrapper>
      <Title>Shop by Category</Title>
    <Container>
      {CategoryElements}
    </Container>
    </Wrapper>
  )
}

export default Categories
const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 2em 0;
`
const Title = styled.h2`
padding: 0.5em;
background: rgba(	0, 172, 238,0.4);
color: #fff;
margin: 1em 0;
border-radius: 4px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 10px;
`
const Category = styled.div`
  cursor: pointer;
  height: 70px;
background: #fff;
border-radius: 4px;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 14px;
box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
const CategoryImage = styled.img`
  height:40px;
  object-fit: contain;
  margin-right: 20px;
`
const CategoryName = styled.h4`
  text-align: center;
  font-size: 1.2rem;
`