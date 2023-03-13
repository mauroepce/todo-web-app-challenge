import React, { useState } from 'react'
import style from "./styles.module.css"
import { useDispatch } from 'react-redux';
import { addATask } from 'reducer/actions';

function TodoForm() {

    const dispatch = useDispatch();

    const [task, setTask] = useState({
        id: 0,
        label: "",
        checked: false
    })

    const handleChange = (e) => {
        e.preventDefault();
        setTask({
            ...task,
            label: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addATask(task))
      
        setTask({
            id: 0,
            label: "",
            checked: false
        });
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") onSubmit(e);
        
    }

  return (
    <div className={style.form_input}>
        
            <input 
                type="text"
                className={style.input_form } 
                placeholder='Enter new to do' 
                value={task.label}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
       
        <button 
            className={style.form_button}
            onClick={onSubmit}
            >
            ADD TO DO
        </button>
    </div>
  )
}

export default TodoForm;