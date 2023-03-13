const generateId = () => {
    const id = Math.floor(Math.random() * 10000);
    return id;
  }

export const createATask = (globalState, newTask) => {
    const idGenerated = generateId()
    const findIndexIdGen = globalState.find( task =>  task.id === idGenerated) 

    if(findIndexIdGen){
        createATask(globalState, newTask)
    } else {
        return {...newTask, id: idGenerated}
    }
}

export const toDoResults = (toDos) => {
   return toDos.reduce((count, task) => {
        if(task.checked){
            count++;
        }
        return count;
    }, 0)
}