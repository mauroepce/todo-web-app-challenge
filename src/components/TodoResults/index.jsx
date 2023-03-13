import React from "react";
import style from "./styles.module.css";
import { useSelector } from "react-redux";
import {  toDoResults } from "utils/utils";

const TodoResults = () => {
  
  const {toDoList} = useSelector(state => state.global_state)

  const donecounter = toDoResults(toDoList)
  console.log(donecounter)

  return <div className={style.todo_results}>Done: {donecounter} </div>;
};

export default TodoResults;
