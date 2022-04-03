import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50  
    </Container>
  )
}

export default Announcement

  const Container = styled.div`
  height: 40px;
  background: #00ACEE;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`