import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { cartItems } from '../data'
const Cart = () => {

  let navigate = useNavigate()
  const redirect = (props) =>{
    let path = props.path
    navigate(path)
  }
  const cartProducts = cartItems.map((item, index) => {
    return (
    <CartItem 
      key={index} 
      product={item} 
      />
    )
  })
  const TotalOrder = () => {
    let total = 0
    cartItems.map((item) => {
      total += item.price * item.quantity
    })
    return total
  }
  return (
    <CartContainer>
    <Title>Your Cart</Title>
    <Top>
      <TopButton 
        color={"#000"} 
        bgColor={"#fff"}
        onClick={() => redirect({path: "/"})}
        >Continue Shopping</TopButton>
      <TopText>Shopping Cart(2)</TopText>
      <TopButton 
        color={"#fff"} 
        bgColor={"#000"}
        onClick={() => redirect({path: "/checkout"})}
        >Checkout Now</TopButton>
    </Top>
    <Bottom>
      <ProductInfo>{cartProducts}</ProductInfo>
      <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 74.9</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.91</SummaryItemPrice>
          </SummaryItem>
          <hr/>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
        <Button>CHECKOUT NOW</Button>
      </Summary>
    </Bottom>
    </CartContainer>
  )
}

export default Cart
const CartContainer = styled.div`
  margin: 2em 0;
`
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const TopButton = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 5px 10px;
  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.bgColor};
  }
`
const TopText = styled.p`
  text-decoration: underline;
  cursor: pointer;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2em;
`
const ProductInfo = styled.div`
  flex:3;
  margin-right: 2em;
`
const Summary = styled.div`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const SummaryTitle = styled.h2`
  font-weight: 400;
  text-align: center;
`
const SummaryItem = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" ? "600" : "400"};
  font-size: ${props => props.type === "total" ? "1.3em" : "1em"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding:  8px 18px;
  border: none;
  font-weight: 500;
  letter-spacing: 1px;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`