import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length<= 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Search gifs" 
                value= {inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}





