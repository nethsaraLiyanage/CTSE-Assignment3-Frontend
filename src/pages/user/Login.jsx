import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/register"; 
    navigate(path);
  }
  return (
  <MainContainer>
    <ImageContainer src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1649055635~exp=1649056235~hmac=32f77414472807ae11efde70a5f31fe7644eddb72a2ad933f5eea28995c1fcdc&w=740" alt="img" />
    <Container>
      <Logo>O.store</Logo>
      <LoginContainer>
        <Title>Sign-In</Title>
        <Form 
            // onSubmit={handleSubmit}
        >
          <Label htmlFor='mail'>Email</Label>
          <Input 
              id='mail'
              type='email'
              name='email'
              placeholder='Enter your Email'
              // onChange={handleChange}
              // value={formData.email}
              // error={errors.email}
          />
          <Label htmlFor='password'>Password</Label>
          <Input 
              id='password'
              type='password'
              name='password'
              placeholder='Enter your Password'
              // onChange={handleChange}
              // value={formData.password}
          />
          <Button color={"#00acee"}>Sign-In</Button>
          <Message>By continuing, you agree to <span>O.store</span>'s Conditions of Use and Privacy Notice.</Message>
        </Form>
      </LoginContainer>
      <NewContainer>
            <HorizonLine>______________</HorizonLine>
            <NewQues>New to <span>O.store</span> ?</NewQues>
            <HorizonLine>______________</HorizonLine>
          </NewContainer>
          <Btn onClick={routeChange}>Create your account</Btn>
    </Container>
   </MainContainer>
  )
  
  }


export default Login
const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 2em;
`
const ImageContainer = styled.img`
  width: 50%;
  object-fit: contain;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
`
const Logo = styled.h1`
  font-family: 'Inter', sans-serif;
  font-family: 'Lobster', cursive;
  font-size:3rem;
  margin-bottom: 0.5em;
`
const LoginContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  padding: 20px 26px;
  background:#fff;
  border-radius: 4px;
`
const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: lighter;
  `
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 5px;
  letter-spacing: 0.7px;
`
const Input = styled.input`
  width: 99%;
  height: 30px;
  box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
  border: 1px solid #a6a6a6;
  /* border-top-color: #949494; */
  border-radius: 3px;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid #00acee;
  }
`
const Message = styled.p`
  margin: 20px 0;
  color: #111;
  font-size: 12px;
`
const Button = styled.button`
  margin-top: 10px;
  height: 33px;
  line-height: 19px;
  padding: 1px 6px;
  border: 1px solid ;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-radius: 3px;
  color: #fff;
  background-color: ${props => props.color};
  box-shadow: 0 10px 20px rgba(0,0,0,0.19);
  cursor: pointer;
  &:active{
    box-shadow: 0 5px 10px rgba(0,0,0,0.19);
  }
  &:focus{
    outline: none;
  }
`
const NewContainer = styled.div`
  vertical-align: center;
  margin-top: 20px;
  color: #767676;
` 
const HorizonLine = styled.span`
  position: relative;
  top:-6px;
  font-size: 13px;
  
` 
const NewQues = styled.span`
  font-size: 15px;
  margin: 0 10px;
`
const Btn = styled.button`
  cursor: pointer;
  margin-top: 10px;
  padding: 5px 30px;
  border: 1px solid #00acee;
  border-radius: 5px;
  background-color: #fff;
  color: #00acee;
  &:hover{
    background-color: #00acee;
    color: #fff;
  }
`