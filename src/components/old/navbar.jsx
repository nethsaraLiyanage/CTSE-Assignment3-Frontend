import styled from 'styled-components'
// import { Search ,  ShoppingCartOutlined  } from '@material-ui/icons'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Badge } from '@material-ui/core'
const Navbar = ({ user }) => {
  const NavStyles ={
    textDecoration: 'none' , 
    color: '#000',
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: 'none' , color: "#000"}} to="/">
            <Logo>O.store</Logo>
          </Link>
          <NavContainer>
            <NavLink 
              style={({isActive}) => isActive ?
              {color: '#00ACEE',textDecoration: 'none'} : NavStyles}
              to="/"><MenuItem>Home</MenuItem></NavLink>
            <NavLink 
              style={({isActive}) => isActive ?
              {color: '#00ACEE',textDecoration: 'none'} : NavStyles}
              to="/shop"><MenuItem>Shop</MenuItem></NavLink>
            <NavLink  
              style={({isActive}) => isActive ?
              {color: '#00ACEE',textDecoration: 'none'} : NavStyles} 
              to="/contact"><MenuItem>Contact</MenuItem></NavLink>
          </NavContainer>
        </Left>
        <Center>
          <SearchContainer>
            {/* <Search  style={{color:"gray",fontSize :"16px"}} /> */}
            <FontAwesomeIcon 
              icon="fa-regular fa-magnifying-glass" 
              style={{color:"gray",fontSize :"16px"}}/>
            <Input />
          </SearchContainer>
          <Button color={"#00ACEE"}>Search</Button>
        </Center>
        <Right>
          {!user &&(
            <>
              <NavLink 
                style={{ textDecoration: 'none' , color: "#000"}} 
                to="/login"><MenuItem>Log In</MenuItem></NavLink>
              <NavLink 
                style={{ textDecoration: 'none' , color: "#000"}} 
                to="/cart">
                  <MenuItem>
                    {/* <Badge badgeContent={4} color="primary"> */}
                      <FontAwesomeIcon icon="fa-light fa-cart-arrow-down" />
                    {/* </Badge> */}
                  </MenuItem>
              </NavLink>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  margin: 0;
  height: 70px ;
  background-color:#fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`
const Wrapper = styled.nav`
  padding: 15px 20px ;
  display: flex ;
  align-items : center ;
  justify-content: space-between ;
`

const Left = styled.div`
  flex: 1 ;
  display : flex ;
  align-items : center ; 
  width:100%;
`
const Logo = styled.h1`
  font-family: 'Inter', sans-serif;
  font-family: 'Lobster', cursive;
  font-size:2rem;
  margin: 0;
`
const NavContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin-left:20px;
  width: 50%;
  
`
const MenuItem = styled.li`
  list-style: none;
  font-size : 1rem ;
  cursor : pointer ;
  margin-left : 25px ;
  font-weight: 500;
  letter-spacing: 1px;
`
const Center = styled.div`
  flex: 1 ;
  display: flex;
  text-align : center ;
  width:100%;
`

const SearchContainer = styled.div`
  border : 1px solid lightgray ;
  display : flex ;
  align-items : center ; 
  margin-left : 25px ;
  padding : 5px ;
  box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
  border-radius:5px;
  width:70%;
`
const Input = styled.input`
  border : none ;
  font-size: 1rem;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:active, &:focus{
    outline: none;
  }
`
const Button = styled.button`
  padding: 7px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: none ;
  border-radius: 5px;
  margin-left: 10px;
  background-color: ${props => props.color};
  cursor: pointer;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19);
  &:active{
    box-shadow: 0 5px 10px rgba(0,0,0,0.19);
  }
`
const Right = styled.div`
  flex: 1 ;
  display : flex ;
  align-items : center ; 
  justify-content : flex-end ;
`


export default Navbar