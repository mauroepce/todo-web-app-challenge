import React from "react";
import style from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem";
import { checkATask, deleteATask } from "reducer/actions";

const TodoList = () => {

  const { toDoList } = useSelector(state => state.global_state)

  const dispatch = useDispatch()

  const handleDelete = (todoId) => {
    dispatch(deleteATask(todoId))
  };

  const toggleCheck = (todoId) => {
    dispatch(checkATask(todoId))
  };


  return (
    <div className={style.todo_list}>
      <span className={style.todo_list_title}>Things to do:</span>
      <div className={style.todo_list_content}>
        {
          toDoList?.length > 0 ?
          toDoList?.map( (task, index) => (
            <TodoListItem
              label={task.label}
              checked={task.checked}
              key={index}
              id={task.id}
              onCheck={toggleCheck}
              onDelete={handleDelete}
            />
          )) :
          <div className={style.no_todos}>
            Looks like you&apos;re absolutely free today!
          </div>
        }
      </div>
      
    </div>
  );
};

export default TodoList;
