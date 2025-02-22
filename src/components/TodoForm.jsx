//React
import React, {useState} from 'react'

//React hooks form
import { useForm } from 'react-hook-form';

//Style
import '../styles/global.css';

const TodoForm = ({todoHandler}) => {
  const [text, setText] = useState();
  const [id, setId] = useState(0);

  const {
    register,
    reset
  } = useForm({
    defaultValues: {
      addToList: "",
    },
  });

  const hadlerSubmit = (e) => {
    e.preventDefault();
  }

  const todoCreate = (text) =>{
    const todoObj = {text: text, id: id};
    setId(id + 1);
    todoHandler(todoObj);
    reset()
  };

  return (
    <div className='container-todo-form'>
      <form onSubmit={hadlerSubmit}>
        <label><p className='title-label'>What would you like to add?</p></label>
        <div className='single-input'>
          <input 
          {...register("addToList")} 
          type='text' 
          onChange={(e) => setText(e.target.value)} 
          className='todoform-input-text' 
          placeholder=''/>
          <label className='todoform-label'>Type to add item</label>
          <button className='btn-green btn-form' type='submit' onClick={() => todoCreate(text)}>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
