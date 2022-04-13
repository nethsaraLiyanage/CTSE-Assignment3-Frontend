import {useState ,useEffect} from 'react'
import { getProducts  } from '../pages/core/apiCore'
const Category = () => {
  const [product , setProduct] = useState({}) //for testing
  const [error , setError] = useState(false)
  const loadSingleProduct = () => { 
      getProducts().then(data => { 
        if(data.error){
          setError(data.error)
        } else{
          setProduct(data)
        }
      })
  }
  useEffect(() => {
    loadSingleProduct() 
  },[])
  return (
    <div>{JSON.stringify(product)}</div>
  )
}

export default Category