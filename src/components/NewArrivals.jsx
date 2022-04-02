import styled from 'styled-components'
import { useLocation } from 'react-router-dom' 
import Product from './Product'
import { newProducts } from '../data'
const NewArrivals = (props) => {
  useEffect(() => {
      props.loadProductsByArrival();
    }, [])
  const Products = newProducts.map((product , id) => { //props.productsByArrival the data from the api
    return (
      <Product
        key={id}
        product={product}
      />
    )
  })
  return (
    <Container>
    <Image src='https://img.ltwebstatic.com/images3_ach/2022/02/14/16448026837f4439dd87cdc45a74358b02636aa04b.webp' />
    <Header>
      <Title> 
        New Arrivals
        {JSON.stringify(props.productsByArrival)}
      </Title>
    </Header>
    <ProductContainer>
      {Products}
    </ProductContainer>
    </Container>
  )
}

export default NewArrivals
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
  align-items: center;
  background: rgba(	0, 172, 238,0.4);
  margin: 2em 0;
  padding: 1em;
`
const Title = styled.h3`
margin:0;
display: flex;
align-items: center;
color: #fff;
`
const Icon = styled.img`
height: 30px;
width: 30px;
object-fit: contain;
margin-right: 10px;
`

