import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import { useDispatch } from "react-redux";
import { getToDoList } from "reducer/actions";
import TodoForm from "components/TodoForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getToDoList())  
  }, [dispatch])

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
