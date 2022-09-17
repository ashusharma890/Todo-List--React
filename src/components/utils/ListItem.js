import React from 'react'
import './ListItem.css'

function ListItem(props) {

  const handleDelete = () => {
    props.deleteItem(props.id);
  }

  return (
    <div className='todo-item'>
        <p>{props.text}</p>

        <button class="btn btn-warning px-5 font-weight-bold" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ListItem;