import { Add, ArrowDropDown, Remove, Star } from '@material-ui/icons'
import { useState ,useEffect} from 'react'
import styled from 'styled-components'
import { read  } from './core/apiCore'
import { addItem , updateItem} from './core/CartHelpers'
import { Navigate , useLocation } from 'react-router-dom'
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({
    id: "asgghuhufghbjnjkjh",
    name: "Toddler Girls Striped Puff Sleeve Belted Dress",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/18/1613616545700f279547cf14d9843d6e0aee6a88ba_thumbnail_900x.webp",
    price: 30.99,
    discount: 0,
    desc: "little girl dress",
    rating: 5,
    reviews: 8,
    offer: "",
    category: "fashion",
  });
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    read(id).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data);
      }
    })
  }, [id]);
  const rate = () => {
    let rating = [];
    for(let i = 0; i < product.rating; i++){
      rating.push(i)
    }
    rating.map(rate => {
      return <Star />
    })
  }
  const handleClick = () =>{
    updateItem( id ,quantity);
    addItem(product, () => {
      console.log("Item added");
    });
  }
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <ProductContainer>
      <Wrapper>
        <ImgContainer>
          <Img src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <Rates>{
            Array(product.rating).fill().map((_) => (
              <Star style={{color: "#FFD700"}} />
              ))}
          </Rates>
          <Price>$ {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </ProductContainer>
  )
}

export default Product
const ProductContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`
const StarIcon = styled.img``
const Rates = styled.div``
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2em auto;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`
const Desc = styled.p``
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

`
const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 400;
`
const Price = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin: 1em 0;
`

const Button = styled.button`
  margin: 1em 0;
  background-color: #000;
  color: #fff;
  padding: 0.4em 1.3em;
  border: none;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

