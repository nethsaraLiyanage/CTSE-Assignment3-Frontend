import {useEffect , useState} from 'react'
import styled from 'styled-components'
const Checkbox = ({categories , handleFilters}) => {
    const [checked, setChecked] = useState([])
    const [error, setError] = useState(false)
    const handleToggle = category => () => {
        // return the first index or -1
       const currentCategoryId = checked.indexOf(category)
       const newCheckedCategoryId = [...checked]
       if (currentCategoryId === -1) {
           newCheckedCategoryId.push(category)
       } else {
           newCheckedCategoryId.splice(currentCategoryId, 1)
       }
        // console.log(newCheckedCategoryId)
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId, 'category')
    }
  return (
    categories.map((category , index) => (
      <ListItem key={index}>
        <input onChange={handleToggle(category.id)} value={checked.indexOf(category.id === -1)} type="checkbox" id={index}/>
        <label htmlFor={index}>{category.name}</label>
      </ListItem>
  ))
  )
}

export default Checkbox
const ListItem = styled.li`
list-style: none;
label{
 margin-left: 0.5em;
}
`