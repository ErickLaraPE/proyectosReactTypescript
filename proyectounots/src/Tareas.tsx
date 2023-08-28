import { useState,createContext } from "react";
import { Tarea } from "./Tarea";

export interface TareaInterface {
    id: any;
    name: string;
}

export const AppContext = createContext<TareaInterface[]>([{id:'',name:''}]);

export const Tareas = () => {

const [todolist,setTodolist] = useState<TareaInterface[]>([])
const [taskname,setTaskname] = useState<string>('')

const handleChange = (cadena:string) => {
    setTaskname(cadena)
}

const addTask = () => {
  const newTask:TareaInterface = {
     id: crypto.randomUUID(),
     name: taskname
  }
  if(newTask.name !== '') {
    const temp = [...todolist]
    const arr1 = temp.find((el) => el.name === newTask.name)
    if(arr1 == null) {
        setTodolist([...todolist,newTask])
    }
  }
}
  
const deleteTask = (id:TareaInterface) => {
    const temp = [...todolist]
    const newTodo = temp.filter((el) => el.id !== id )
    setTodolist(newTodo)
}

 return(
    <div className='container-md'>
        <div className='row d-flex'>
          <label>Ingrese una tarea:</label>
          <div className='col-md-8 d-flex justify-content-end pe-1'>
            <input className='w-50' onChange={(e)=>handleChange(e.target.value)} type="text" />
          </div>
          <div className='col-md-4 d-flex justify-content-start ps-1'>
            <button className='btn btn-primary btn-xs fs-6' onClick={()=>addTask()} type="button">Add task</button>
          </div> 
        </div>
        <AppContext.Provider value={todolist}>
          {todolist.map((objTarea)=>{
            return(  
              <Tarea objTarea={objTarea}
                     deleteTask={deleteTask}     
              />
            )
          })}
        </AppContext.Provider>
    </div>
 )
}