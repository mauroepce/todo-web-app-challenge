import React from "react";
import style from "./styles.module.css";

const TodoListItem = ({ onCheck, checked, onDelete, label, id }) => { 

  return (

    <div className={style.todo_list_item}>
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className={style.todo_list_item_content}
      >
        <input
          tabIndex="-1"
          type="checkbox"
          checked={checked && checked}
          onChange={() => onCheck(id)}
        />
        <span className={checked ? 
          style.todo_list_item_checked : 
          ""}>
            {label}
        </span>
      </div>
      <button type="button" className={style.todo_list_item_delete} onClick={() => onDelete(id)}>
        x
      </button>
    </div>
  )
};

export default TodoListItem;
