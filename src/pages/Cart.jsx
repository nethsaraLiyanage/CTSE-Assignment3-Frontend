import { useState , useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { getCart } from './core/CartHelpers'
import { itemsTotal , updateItem } from './core/CartHelpers'
import { isAuthenticated} from './auth/index'
const Cart = () => {
  const [items , setItems] = useState([])
  const [run, setRun] = useState(false);
  useEffect(() => {
    setItems(getCart())
  },[run])
  console.log(items)
  const navigate = useNavigate()
  const redirect = () => {
    let path = '/shop'
    navigate(path)
  }
  const handleCheckout = () => {
    let path = '/checkout'
    navigate(path)
  }
  const cartProducts = items.map( (item) => (
    <CartItem 
      key={item.id} 
      cartItem={item} 
      cartUpdate={true}
      setRun={setRun}
      run={run}
    />
  ))
  const SubTotal = items.map(item => item.price * item.count).reduce((a,b) => a + b , 0)
  
  const noItemsMessage = () => (
    <Message>
      <MessageText>Your cart is empty</MessageText>
      <TopButton 
        color={"#fff"} 
        bgColor={"#00acee"}
        style={{border: 'none'}}
        onClick={() => redirect()}
        >Continue Shopping</TopButton>
    </Message>
  )
  return (
    <CartContainer>
    <Title>Your Cart</Title>
    {items.length ? 
    <Top>
      <TopText>Shopping Cart ({items.length})</TopText>
      <TopButton 
        color={"#fff"} 
        bgColor={"#00acee"}
        onClick={() => redirect({path: "/"})}
        >Continue Shopping</TopButton> 
    </Top> : null}
    { items.length === 0 ? noItemsMessage() :
    <Bottom>
      <ProductInfo>{cartProducts}</ProductInfo>
      <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>{
                SubTotal.toFixed(2)
              }</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.91</SummaryItemPrice>
          </SummaryItem>
          <hr/>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>{(SubTotal + 5.91).toFixed(2)}</SummaryItemPrice>
          </SummaryItem>
          <Button onClick={()=> handleCheckout()}>CHECKOUT NOW</Button>
        {/* {isAuthenticated() ? 
          (<Button onClick={()=> handleCheckout()}>CHECKOUT NOW</Button>) : 
          (<Link to="/login" style={{alignSelf:"center"}}><Button>SIGN IN TO CHECKOUT</Button></Link>)} */}
      </Summary>
    </Bottom>}
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
  padding: 2em;
`

const TopButton = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 5px 10px;
  border: none;
  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.bgColor};
  }
`
const TopText = styled.p`
  cursor: pointer;
  text-align: center;
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
  align-self: center;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`
const Message = styled.div`
  flex:3;
  margin-right: 2em;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const MessageText = styled.p`
  font-size: 1.5em;
  font-weight: 400;
`