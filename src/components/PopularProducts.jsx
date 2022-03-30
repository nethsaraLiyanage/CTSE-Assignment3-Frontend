import styled from 'styled-components'
import {   ShoppingCartOutlined  } from '@material-ui/icons'
const PopularProducts = (props) => {
  console.log(props);
  const products = popProducts.map((product) => {
    const calcDiscount =(product.discount / 100) * product.price
    return (
      <Product key={product.id}>
        <ImageContainer>
          <Offer>{product.offer}</Offer>
          <ProductImage src={product.image} alt={product.name}/>
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
          </Info>
        </ImageContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductRate>{
            Array(product.rating).fill().map((_) => (
              <StarIcon src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
              ))}
          </ProductRate>
          <ProductPrice>
          {product.discount ? 
          <div>
            <span className='new-price' >${ (product.price - calcDiscount).toPrecision(4) }</span>
            <span className='old-price'>${product.price}</span>
          </div> : <div>${product.price}</div> }</ProductPrice>
        </ProductInfo>
      </Product>
    )
  })
  return (
    <ProductContainer>
      {products}
    </ProductContainer>
  )
}
export default PopularProducts
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  margin-bottom: 2em;
  `
  const Product = styled.div`
  width: 175px;
  font-size: 12px;
  flex: 0 0 auto;         
  display: flex;          
  flex-direction: column;
  cursor: pointer;
`
  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba( 0 , 0 , 0 , 0.2 );
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`
const ImageContainer = styled.div`
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`
const ProductImage = styled.img`
  width: 100%;
  border-radius: 9px;
`
const Offer = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: #fee2cc;
  color: #9f6000;
  padding: 5px 7px;
  border-radius: 2px;
  font-weight: bold;
`
const Icon = styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
    background: #e9f5f5;
    transform: scale(1.1)
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0; 
  margin-top: 10px;
`
const ProductRate = styled.div`
  display: flex;
`
const StarIcon = styled.img`
  height: 15px;
  margin-right: 5px;
  margin: 0.5rem 5px 0 0;
`
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 0.5rem;
  .old-price{
    text-decoration: line-through;
    color: #999;
    font-weight: 400;
    margin-right: 0.8rem;
  }
  .new-price{
    color: rgba(255,0,0,0.8);
    margin-right: 0.8rem;
  }
`





