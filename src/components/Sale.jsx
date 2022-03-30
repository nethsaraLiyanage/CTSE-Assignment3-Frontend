import styled from 'styled-components'
import Product from './Product';
import { popularProducts } from '../data'
const Sale = () => {
const Products = popularProducts.map(item => {
        return (
            <Product
                key={item.id}
                {...item}
                
            />
        )
    })
//  const [time , setTime] = useState({
//   hour: '00',
//   minute: '00',
//   second: '00',
//  });
//  useEffect(() => {
//   const interval = setInterval(() => {
   
//    let date = new Date();
//    setTime(()=>{
//      return {
//        hour: 23 - date.getHours(),
//        minute: 59 - date.getMinutes(),
//        second: 59 - date.getSeconds(),
//      }
//    })
//    clearInterval(interval);
//  }, [1000])
// }, [time]);
  return (
    <Container>
      <Image src='https://img.ltwebstatic.com/images3_ach/2022/03/11/164698698613f0a2a60395b53a861bcedf897ae20e.webp' />
      <Header>
        <Title> 
        Flash Sales Every Day
        </Title>
        {/* <Time>
        <Item>{time.hour}h:</Item>
        <Item>{time.minute}m:</Item>
        <Item>{time.second}s</Item>
       </Time> */}
    </Header>
    <ProductContainer>
      {Products}
    </ProductContainer>
    </Container>
  )
}

export default Sale
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
`
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  margin-bottom: 2em;
  `
const Image = styled.img`
  width: 100%;
`
const Header = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  background: #fee2cc;
  margin: 2em 0;
  padding: 1em;
`
const Title = styled.h3`
margin:0;
display: flex;
align-items: center;
`
const Icon = styled.img`
height: 30px;
width: 30px;
object-fit: contain;
margin-right: 10px;
`
// const Time = styled.div`
//  line-height: 1.5em;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
// `
// const Item = styled.p`
//  letter-spacing: 1px;
//  font-size: 1.2em;
// `
