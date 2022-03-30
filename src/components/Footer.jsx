import React from 'react'
import { Facebook, Instagram, Twitter, Pinterest } from '@material-ui/icons'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
     <Left>
      <Logo>O.store</Logo>
      <SocialContainer>
       <SubTitle>Join Us On</SubTitle>
       <Icons>
        <SocialIcon color="#3b5999"><Facebook /></SocialIcon>
        <SocialIcon color="#e4405f"><Instagram /></SocialIcon>
        <SocialIcon color="#55acee"><Twitter /></SocialIcon>
        <SocialIcon color="#e60023"><Pinterest /></SocialIcon>
       </Icons>
      </SocialContainer>
     </Left>
     <Right>
      <SubTitle>Payment Methods</SubTitle>
      <Methods>
       <Payment 
        src="https://cdn-icons.flaticon.com/png/512/5025/premium/5025895.png?token=exp=1648457365~hmac=0b56984128e2ff427eff660cfeda73ac" 
        alt="cash on delivery"
        />
       <Payment 
        src="https://cdn-icons-png.flaticon.com/512/349/349221.png" 
        alt="cash on delivery"
        />
      <Payment 
        src="https://cdn-icons-png.flaticon.com/512/217/217445.png" 
        alt="cash on delivery"
        />
      </Methods>
        {/* <Copyright>©2022 O.store All Rights Reserved</Copyright> */}
     </Right>
    </Container>
  )
}

export default Footer


const Container = styled.footer`
 display: flex;
 background-color: #fff;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 20px;
`
const Logo = styled.h1`
  font-family: 'Inter', sans-serif;
  font-family: 'Lobster', cursive;
  margin-bottom: 2em;
`

const SocialContainer = styled.div`
 display: flex;
 flex-direction: column;
`
const Icons = styled.div`
display:flex;
`

const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 color: #fff;
 background: ${props => props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
`
const SubTitle = styled.h6`
 font-weight:bold;
 margin-bottom: 20px;
 font-size: 1rem;
 text-transform: uppercase;
`

const Right = styled.div`
 flex: 1;
 padding: 20px;
  display: flex;
  flex-direction: column;
`

const Methods = styled.div`
display:flex;
`
const Payment = styled.img`
height:50px;
margin-right: 1.5em;
`
const Copyright = styled.p`
margin-top: 4em;
color: rgba(0,0,0,0.5);
`