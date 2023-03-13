import axios from "axios";
import { toast } from "react-toastify";

import { 
    toggleCheck, 
    storeToDoList, 
    taskDeleted,
    taskAdded
     } from "./reducer";


let apiURL = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos";

export const getToDoList = () => {
    return async function (dispatch) {
        try {
            let {data} = await axios.get(apiURL)
    
            dispatch(storeToDoList(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const checkATask = (id) => {
    return async function (dispatch) {
        try {
            dispatch(toggleCheck(id))
            
        } catch (error) {
            toast.warn(error.message);
        }
    }
}

export const deleteATask = (id) => {
    return async function (dispatch) {
        try {
            dispatch(taskDeleted(id))
            toast.warn("YOU DELETE A TASK!");
        } catch (error) {
            toast.warn(error.message);
        }
    }
}

export const addATask = (task) => {
    console.log(task)
    return async function (dispatch) {
        try {
            dispatch(taskAdded(task))
            toast.success("YOU ADD A NEW TASK");
        } catch (error) {
            toast.warn(error.message);
        }
    }
}