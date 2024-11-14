import React from 'react';
import '../../todo.css'

function Input(props){
    return(
        <input 
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className='texto'
        />
    );
}

export default Input;