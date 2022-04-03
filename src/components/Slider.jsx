
import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { sliderItems } from '../data';
const Slider = () => {
  const SliderEl = sliderItems.map((item) => (
    <Carousel.Item interval={1000} key={item.id}>
    <Image 
      src={item.img}
      alt={item.alt}
    />
    </Carousel.Item>
  ))
  return (
    <Container>
      <Carousel 
        prevLabel={null}
        nextLabel={null}
      >
        {SliderEl}
      </Carousel>
    </Container>
  )
}

const Image = styled.img`
  display: block;
  width:100%;
  height: 100vh;
`
const Container = styled.div`
margin-top: 2em;
`
export default Slider