import React from 'react';
import '../../todo.css'

function Form(props) {
    return <form onSubmit={props.onSubmit}>{props.children}</form>
}

export default Form;