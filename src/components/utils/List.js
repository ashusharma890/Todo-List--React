import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import './List.css';

const Local_Storage_Key = 'react-app-acciojob-todos';

function List() {

const [todos, setTodos] = useState([]);

useEffect(()=> {
  const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
  if (storedTodos) setTodos(storedTodos);
}, []);

useEffect(()=> {
  if(todos.length > 0)
  localStorage.setItem(Local_Storage_Key, JSON.stringify(todos));
}, [todos]);

function deleteItem(id) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

const [todoInput, setTodoInput] = useState('');

const handleInput = (e) => {
  setTodoInput(e.target.value);
}

const handleSubmit = (e) => {
  if(todoInput == '') return;
  setTodos([
    {
      id: Math.random() * 1000000,
      text: todoInput,
    }, 
    ...todos
  ]);
  setTodoInput('');
}

  return (
    <div className='list-container'>
      <div className='todo-input-form'>
        <input type='text' placeholder='Add a todo' onChange={handleInput} value={todoInput} />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      {
        todos.map(
          todo => <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem} />
        )
      }
    </div>
  )
}

export default List