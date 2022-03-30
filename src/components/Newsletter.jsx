import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const NewsLetter = () => {
  const [email , setEmail] = useState("")
  function handleChange(event) {
        const { value} = event.target
        setEmail(value)
    }
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(email)
    setEmail("")
  }
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input  
            placeholder='Your Email Address'
            id='email'
            type='email'
            name='email'
            onChange={handleChange}
            value={email}  
          />
        </InputContainer>
        <Button>
          Subscribe
        </Button>
      </FormContainer>
    </Container>
  )
}

export default NewsLetter

const Container = styled.div`
  height: 300px;
  background: rgba(	0, 172, 238,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 4.1rem;
  margin-bottom: 20px;
`
const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 20px;
`
const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 40px;
`
const InputContainer = styled.div`
  width: 80%;
  height:100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgray;
  border-radius: 5px;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus , &:active{
    outline:none;
  }
`
const Button = styled.button`
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  padding: 8px 18px;
  background: #00ACEE;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19);
  &:active{
    box-shadow: 0 5px 10px rgba(0,0,0,0.19);
  }
`