import { createSlice } from "@reduxjs/toolkit";
import { createATask } from "utils/utils";

const initialState = {
    toDoList: [],
    
}


export const to_do_slice = createSlice({
    name: "to_do_reducer",
    initialState,
    reducers: {
        storeToDoList: (state, actions) => {
            state.toDoList = actions.payload
        },
        toggleCheck: (state,actions) => {
            const index = state.toDoList.findIndex( task => task.id === actions.payload)
            state.toDoList[index].checked = !state.toDoList[index].checked
        },
        taskDeleted: (state, actions) => {
            state.toDoList = state.toDoList.filter( task => task.id !== actions.payload)
        },
        taskAdded: (state, actions) => {
            const newTask = createATask(state.toDoList, actions.payload)
            state.toDoList = [...state.toDoList, newTask ]
        }
    }
})

export const {
    storeToDoList,
    toggleCheck,
    taskDeleted,
    taskAdded
} = to_do_slice.actions

export default to_do_slice.reducer