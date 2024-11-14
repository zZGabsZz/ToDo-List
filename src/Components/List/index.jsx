import React from 'react';
import '../../todo.css'
import lixo from '../../assets/pokecell.png'
import checkn from '../../assets/pokeball.png'

function List(props) {
  return (
    <div className="todo-list">
      {props.itemsList.map((item, index) => (
        <div key={index} className="todo-item">

          <input type="checkbox" id={`checkbox-${index}`} className='check'/>

          <label htmlFor={`checkbox-${index}`} className="checkbox-label">
          <img src={checkn} alt="checkbox" />
          </label>

          <h1 className='item1'>{item}</h1>

          <button className='poke' onClick={() => props.onDeleteItem(index)}>
            <img src={lixo}/>
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
