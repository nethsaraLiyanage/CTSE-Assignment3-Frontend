import {  Add, DeleteOutline, Remove } from '@material-ui/icons'
import { update } from 'lodash'
import { useState} from 'react'
import styled from 'styled-components'
const CartItem = ({cartItem , cartUpdate = false }) => {
  const [quantity , setQuantity] = useState( cartItem.count )
  const increaseQuantity = ( productId) => {
    setQuantity((prev) =>  prev + 1)
    updateItem(productId , quantity)
  }
  const decreaseQuantity = ( productId) => {
    setQuantity((prev) =>  prev - 1)
    updateItem(productId , quantity)
  }
  
  return (
    <Container>
      <ProductDetail>
        <ProductImage src={cartItem.image} alt={cartItem.name}/>
        <Details>
          <ProductName><b>Product: </b>{cartItem.name}</ProductName>
          <ProductId><b>ID: </b>{cartItem.id}</ProductId>
          <ProductCategory><b>Category: </b>{cartItem.category}</ProductCategory>
          <DeleteOutline style={{fontSize:"30px",cursor:"pointer"}} />
        </Details>
      </ProductDetail>
      <PriceDetail>
        <Price>$ {cartItem.price * quantity}</Price>
        <BtnContainer>
          <Remove onClick={()=> decreaseQuantity()} />
          <Quantity>{quantity}</Quantity>
          <Add onClick={()=> increaseQuantity()} />
        </BtnContainer>
      </PriceDetail>
    </Container>
  )
}

export default CartItem
const Container = styled.div`
 display: flex;
 justify-content: space-between;
 border-bottom: 2px solid #ccc;
 background-color: #fff;
 padding: 1em 0;
 &:last-child {
   border-bottom: none;
 }
`

const ProductDetail = styled.div`
 display: flex;
 justify-content: space-between;
`
const ProductImage = styled.img`
 max-width: 100%;
 height: 160px;
 object-fit: contain;
`
const Details = styled.div`
 margin-left: 1em;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`
const ProductName = styled.h4`
  font-weight: 500;
  font-size: 1.2em;
  line-height: 1.3em;
`
const ProductId = styled.span``
const ProductCategory = styled.p``
const PriceDetail = styled.div`
 margin-right: 1em;
`
const BtnContainer = styled.div`
  display: flex; 
  align-items: center;
  
`
const Quantity = styled.p`
 font-size: 1.7em;
 font-weight: 500;
 margin: -7px 10px 0;
`
const Price = styled.p`
 font-size: 1.4em;
 font-weight: 700;
`