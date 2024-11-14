import React from 'react';
import '../../todo.css'

function Button(props) {
    return <button type={props.type} className='env'>{props.children}</button>
}

export default Button;