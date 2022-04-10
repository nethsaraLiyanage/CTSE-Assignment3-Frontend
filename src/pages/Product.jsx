import { Add, ArrowDropDown, Remove, Star } from '@material-ui/icons'
import { useState ,useEffect} from 'react'
import styled from 'styled-components'
import { read  } from './core/apiCore'
import { addItem } from './core/CartHelpers'
import { Navigate } from 'react-router-dom'
const Product = (props) => {
  // const path = useLocation().pathname
  // console.log(path)
  const [product , setProduct] = useState({
    id: "Bo1C7io0BTJowXAgNjS9",
    name: "Clear Acrylic Frame Glasses",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
    price: 30.99,
    rating:  5 ,
    discount: 0,
    reviews: 10,
    offer: "",
    category: "accessories",
  }) //for testing
  // const [error , setError] = useState(false)
  // const loadSingleProduct = (productId) => { 
  //     read(productId).then(data => { 
  //       if(data.error){
  //         setError(data.error)
  //       } else{
  //         setProduct(data)
  //       }
  //     })
  // }
  // useEffect(() => {
  //   const productId = props.match.params.id
  //   loadSingleProduct(productId) 
  // },[])
  const [redirect , setRedirect] = useState(false)
  const addToCart = () => {
    addItem(props , () => {
      setRedirect(true)
    })
  }
  const shouldRedirect = redirect => {
    if(redirect){
      return <Navigate to="/cart" />
    }
  }
  const [quantity , setQuantity] = useState(1)
  const [review , setReview] = useState('')
  const increaseQuantity = ( id) => {
    setQuantity((prev) =>  prev + 1)
  }
  const decreaseQuantity = ( id) => {
    setQuantity((prev) =>  prev - 1)
  }
  function handleChange(event) {
    setReview(event.target.value)
  }
  function handleSubmit (e){
    e.preventDefault()
    return (
      <Review>{review}</Review>
    )
  }

  return (
    <ProductContainer>
      {shouldRedirect(redirect)}
      {/* <Title>single product</Title> */}
      {/* <Wrapper>{JSON.stringify(product)}</Wrapper> */}
     <Wrapper>
       <ImgContainer>
         <Img   
          src={product.image}
          alt={product.name}
         />
       </ImgContainer>
       <InfoContainer>
         <Title>{product.name}</Title>
         <Rating><Star style={{color:"#ffd700"}}/><Star style={{color:"#ffd700"}}/><Star style={{color:"#ffd700"}} /><Star style={{color:"#ffd700"}} /><Star style={{color:"#ffd700"}} />(10)</Rating>
         <Price>{product.price}</Price>
         <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            asperiores aperiam, expedita dignissimos alias sequi explicabo molestiae 
            obcaecati dolorem necessitatibus nisi voluptatum dicta. 
         </Description>
         <BtnContainer>
          <Remove onClick={()=> decreaseQuantity()} />
          <Quantity>{quantity}</Quantity>
          <Add onClick={()=> increaseQuantity()} />
        </BtnContainer>
         <Button onClick={addToCart}>ADD TO CART</Button>
       </InfoContainer>
     </Wrapper>
     <ReviewsContainer>
       <Reviews>
         <Title>All Reviews</Title>
         <Review>i like it</Review>
         <Review>i like it</Review>
         <Review>i like it</Review>
         <Review>i like it</Review>
         <Review>i like it</Review>
         <Review>i like it</Review>
         <Review>i like it</Review>
         <Review>i like it</Review>
       </Reviews>
       <Form>
        <TextArea 
          type="text"
          placeholder="Write your review here"
        />
        <SubButton>SUBMIT</SubButton> 
       </Form>
     </ReviewsContainer>
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
const Description = styled.p`
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
const Rating = styled.div``
const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
`
const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3em;
`
const Reviews = styled.div`
  flex: 1;
`
const TextArea = styled.textarea`
  width: 400px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 10px;
`
const SubButton = styled.button`
  background-color: #00acee;
  color: #fff;
  padding: 0.4em 1.3em;
  border-radius: 5px;
  border: none;
  margin-top: 1em;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19);
  &:active{
    box-shadow: 0 5px 10px rgba(0,0,0,0.19);
  }
  &:focus{
    outline: none;
  }
`
const Review = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 1em 0;
  &:last-child{
    border-bottom: none;
  }
`
const BtnContainer = styled.div`
  display: flex; 
  align-items: center;
`
const Quantity = styled.p`
 font-size: 1.7em;
 font-weight: 500;
 margin: -7px 10px 0;
`
const Dropdown = styled.span``