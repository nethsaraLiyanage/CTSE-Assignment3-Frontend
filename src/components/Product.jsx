import styled from 'styled-components'
import {   ShoppingCartOutlined  } from '@material-ui/icons'
import { Link , Navigate } from 'react-router-dom'
import { addItem } from '../pages/core/CartHelpers'
import { useState } from 'react'
const Product = (props) => {
  const [redirect , setRedirect] = useState(false)
 const calcDiscount =(props.discount / 100) * props.price
  const addToCart = () => {
    addItem(props , () => {
      setRedirect(true)
    })
  }
  const shouldRedirect = redirect => {
    if(redirect){
      return <Navigate to="/cart" />
    }
  }
  return (
  <Link to={`/product/${props.id}`} style={{textDecoration:"none"}} >
    <ProductEle>
        {shouldRedirect(redirect)}
        <ImageContainer>
          {props.offer && <Offer>{props.offer}</Offer>}
          <ProductImage src={props.image} alt={props.name}/>
          <Info>
              <Icon >
                <ShoppingCartOutlined onClick={addToCart} />
              </Icon>
          </Info>
        </ImageContainer>
        <ProductInfo>
          <ProductName>{props.name}</ProductName>
          <ProductRate>{
            Array(props.rating).fill().map((_) => (
              <StarIcon src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
              ))}
          </ProductRate>
          <ProductPrice>
          {props.discount ? 
          <div>
            <span className='new-price' >${ (props.price - calcDiscount).toPrecision(4) }</span>
            <span className='old-price'>${props.price}</span>
          </div> : <div>${props.price}</div> }</ProductPrice>
        </ProductInfo>
      </ProductEle>
      </Link>
  )
}

export default Product
const ProductEle = styled.div`
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
  color: #000;
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
  color: #000;
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