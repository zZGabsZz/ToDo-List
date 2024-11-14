import React, { useState } from 'react';
import Form from './Components/Form'
import Button from './Components/Button'
import Input from './Components/Input'
import List from './Components/List'
import './todo.css'

function Todo() {
    const [itemsList, setItemsList] = useState([])
    const [task, setTask] = useState('');

    function handleChangeInput(event){
        const inputTask = event.target.value;

        setTask(inputTask);
    }

    function handleAddItemToList(event){
        event.preventDefault();

        if (!task) {
            return;
        }

        setItemsList((prevItemsList) => [...prevItemsList, task]);
        setTask('');
    }

    function handleDeleteItem(index) {
        const newList = itemsList.filter((_, itemIndex) => itemIndex !== index);
        setItemsList(newList);
    }

    return(
        <div className="todo-wrapper">
            <h1 className='title'>T<span className='o'>O</span>D<span className='o2'>O</span><span className='list'>List</span></h1>
            <Form onSubmit={handleAddItemToList}>
                <Input
                    type="text"
                    placeholder="Adicione uma tarefa"
                    onChange={handleChangeInput}
                    value={task}
                />
                <Button type="submit">Adicionar</Button>
            </Form>
        
            <List itemsList={itemsList} onDeleteItem={handleDeleteItem}/>
        </div>
    )
}

export default Todo;