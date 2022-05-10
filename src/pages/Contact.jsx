<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
const Contact = () => {
=======
import { useState , useRef } from 'react'
import styled from 'styled-components'
const Contact = () => {
  const form = useRef();
  const [contactData , setContactData] = useState({
      userName: '',
      userEmail: '',
      userPhone:'',
      userMessage: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setContactData({...contactData , [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(contactData)
  }
  
>>>>>>> ed44f83730a503bd298959bbe5a70015f0cde32f
  return (
    <Container>
     <Title>Contact Us</Title>
     <Info>
      <InfoText>Email: info@o-store.com</InfoText>
      <InfoText>Phone: +20 1111 111 111</InfoText>
     </Info>
<<<<<<< HEAD
     <Form>
      <Input type="text"
       placeholder="Your Name"

        
      />
      <Input type="email"
       placeholder="Your Email"
       
        
=======
     <Form ref={form} onSubmit={handleSubmit}>
      <Input type="text"
       placeholder="Your Name"
        name="userName"
        onChange={handleChange}
        value={contactData.userName}
      />
      <Input type="email"
       placeholder="Your Email"
       name='userEmail'
        value={contactData.userEmail}
        onChange={handleChange}
>>>>>>> ed44f83730a503bd298959bbe5a70015f0cde32f
      />
      <Input type="phone"
       placeholder="Your Phone (optional)"
       width={'100%'}
       className="full-width"
<<<<<<< HEAD
       
      />
      <TextArea placeholder='Your message' 
=======
       name='userPhone'
        value={contactData.userPhone}
        onChange={handleChange}
      />
      <TextArea 
        placeholder='Your message' 
        name='userMessage'
        value={contactData.userMessage}
        onChange={handleChange}
>>>>>>> ed44f83730a503bd298959bbe5a70015f0cde32f
       />
      <Button>Send Message</Button>
     </Form>

    </Container>
  )
}

export default Contact
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 3em auto;
`
const Title = styled.h2`
  text-align: center;
  font-weight: 400;
  margin-bottom: 1em;
`
const Info = styled.div``
const InfoText = styled.p`
  font-size: 1.2em;
`
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  .full-width{
   grid-column: 1/3;
  }
`
const Input = styled.input`
  padding: 0.8em;
  border: 0.5px solid lightgray;
`

const TextArea = styled.textarea`
  grid-column: 1/3;
  padding: 0.8em;
  height: 10em;
  resize: none;
  border: 0.5px solid lightgray;
`
const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding:  8px 18px;
  border: 1px solid #000;
  font-weight: 500;
  grid-column: 1/3;
  text-transform: uppercase;
  &:hover {
    background-color: #fff;
    color: #000;
  }

`
