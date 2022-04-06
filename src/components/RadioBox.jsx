import {useEffect , useState , Fragment} from 'react'
import styled from 'styled-components'
const RadioBox = ({fixedPrices , handleFilters}) => {
    const [value , setValue] = useState(0)
    const handleChange =(e) => {
        handleFilters(e.target.value )
        setValue(e.target.value)
    }
    return (
    fixedPrices.map((fixedPrice , index) => (
    <ListItem key={fixedPrice.id}>
        <Input 
        type="radio" 
        id={index}
        name={fixedPrice}
        value={`${fixedPrice.id}`}
        onChange={handleChange}
        />
        <Label htmlFor={index} >{fixedPrice.name}</Label>
    </ListItem>
    ))
) 
}

export default RadioBox
const ListItem = styled.li`
list-style: none;
`
const Input = styled.input`
`
const Label = styled.label`
margin-left: 0.5em;
`
