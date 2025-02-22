//React
import React,{useState} from 'react'

//Styles
import '../styles/global.css';

//Components
import TodoForm from './TodoForm';

//Utils
import {AddTodoList, DeleteTodoItem } from '../utils/formUtils';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

const handleAddlist = (newItem) => {
  setTodos((prevItem) => AddTodoList(prevItem, newItem));
}

  const handleDeleteItem = (id) => {
    setTodos((prevItem) => DeleteTodoItem(prevItem, id));
  };

  return (
    <div>
      <TodoForm todoHandler={handleAddlist}/>
      <ul className='ul-todo-list'>
      {todos.map((todo, key) => (
          <div key={key} className='container-list'>
            <label className='custom-checkbox'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <li>{todo.text}</li>
            <button className='btn-red btn-form' type='submit' onClick={() => handleDeleteItem(todo.id)} >Remove</button>
          </div>
        ))}

      </ul>
    </div>
  )
}

export default TodoList
