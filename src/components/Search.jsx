import React , { useState , useContext } from 'react'
import styled from 'styled-components'
import { Search  } from '@material-ui/icons'
import { list } from '../pages/core/apiCore'
import { useNavigate } from 'react-router-dom'
const SearchComponent = () => {
  const navigate = useNavigate()
  const redirect = () => {
    let path = '/search'
    navigate(path)
  }
  const [data , setData] = useState({
    categories:[],
    category:'',
    search:'',
    results:[],
    searched:false
  })
  const {  search, results, searched } = data
  const searchData = () => {
    if(search){
      list({search: search || undefined})
      .then(res => {
        if(res.error){
          console.log(res.error)
        }else{
          setData({...data, results: res, searched: true})
        }
      })
      // if searched true
      localStorage.setItem('search',JSON.stringify(data))
    }
  }
  const searchSubmit = (e) => {
    e.preventDefault()
    searchData()
  }
  const handleChange = (name) => (event) =>{
    const value = event.target.value
    setData({...data, [name]: value, searched: false })
  }
  return (
    <Container>
      <Form onSubmit={searchSubmit}>
        <SearchContainer>
          <Search  style={{color:"gray",fontSize :"16px"}} />
          <Input 
            type='search'
            onChange={handleChange('search')}
            placeholder='search by name'
          />
        </SearchContainer>
        <Button color={"#00ACEE"} onClick={()=>{
          redirect()
        }}>Search</Button>
      </Form>
    </Container>
  )
}

export default SearchComponent
const Container = styled.div`
  flex: 1 ;
  display: flex;
  text-align : center ;
  width:100%;
`
const Form = styled.form`
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
  &:focus{
    outline: none;
  }
`