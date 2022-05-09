import styled from 'styled-components'
import Product from '../components/Product'
const SearchPage = () => {
  // const { results } = JSON.parse(localStorage.getItem('search'))
  const results = [ //dummy data
    {
    id: "Bo1C7io0BTJowXAgNjS9",
    name: "Clear Acrylic Frame Glasses",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
    price: 30.99,
    rating:  5 ,
    discount: 0,
    reviews: 10,
    offer: "",
    category: "accessories",
  },
  {
    id: "adAjk9kL-HimX7-Pb337",
    name: "3pcs Shell Decor Necklace",
    image: "https://img.ltwebstatic.com/images3_pi/2022/03/04/16463801071500c4d404d02d67cf13ecb4d0ea073f_thumbnail_900x.webp",
    price: 35.99,
    discount: 0,
    rating: 4,
    reviews: 20,
    offer: "",
    category: "accessories",
  }]
  const SearchResults = results.map((result , i) => (
    <Product key={i} {...result}  />
  ))
  return (
    <Container>
      <Title>Search Results ({results.length})</Title>
      <hr/>
      <SearchContainer>
        {SearchResults}
      </SearchContainer>
    </Container>
  )
}

export default SearchPage
const Container = styled.div`
  width: 80%;
  margin: 3em auto;
`
const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 100px 100px 100px; 
  column-gap: 10px;
  row-gap: 15px;
`
const Title = styled.h3`
  font-weight: 400;
`