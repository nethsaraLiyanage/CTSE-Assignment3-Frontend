import { useEffect } from 'react';
import styled from 'styled-components'
import Product from './Product';
import { popularProducts } from '../data' //dummy data

function Sale(props){
    // useEffect(() => {
    //   props.loadProductsBySell();
    // }, [])
  const Products = popularProducts.map((product ) => (  //props.productsBySell the data from the api
    <Product key={product.id} {...product} />
  ))
  return (
    <Container>
      <Image src='https://img.ltwebstatic.com/images3_ach/2022/03/11/164698698613f0a2a60395b53a861bcedf897ae20e.webp' />
      <Header>
        <Title> 
        Flash Sales Every Day
        {/* {JSON.stringify(props.productsBySell)} */}
        </Title>
    </Header>
    <ProductContainer>
      {Products}
    </ProductContainer>
    </Container>
  )
}

export default Sale
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
`
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  margin-bottom: 2em;
  `
const Image = styled.img`
  width: 100%;
`
const Header = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  background: #fee2cc;
  margin: 2em 0;
  padding: 1em;
`
const Title = styled.h3`
margin:0;
display: flex;
align-items: center;
`
const Icon = styled.img`
height: 30px;
width: 30px;
object-fit: contain;
margin-right: 10px;
`
