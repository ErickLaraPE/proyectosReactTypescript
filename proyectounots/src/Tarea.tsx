import { TareaInterface,AppContext } from "./Tareas"
import {useState,useContext} from 'react'

interface tareaInt {
    objTarea : TareaInterface;
    deleteTask: (id:TareaInterface) => void;
}

export const Tarea = ({objTarea,deleteTask}:tareaInt) => {

    const [isEdit,setIsEdit] = useState(false)
    const todolist = useContext(AppContext)

    const FormEdit = () => {
        const [newValue,setNewValue] = useState<string>(objTarea.name)
        const updateTask = (id:TareaInterface,cadena:string) => {
            const temp = [...todolist]
            const temp2 = temp.find((el)=>el.id === id) as TareaInterface
            temp2.name = cadena
            const temp3 = temp.filter((el)=>el.id !== id)
            const temp4 = temp3.find((el)=>el.name === temp2.name) as TareaInterface
            if((temp2.name !== '' )||(temp4 == null)){
                setIsEdit(false)
            } else {
                setIsEdit(true)
            }
        }
        return(
            <div className="row d-flex justify-content-center pt-4">
              <div className="col-sm-9">
                <input className='w-75' type='text' onChange={(e)=>setNewValue(e.target.value)} value={newValue}></input>
              </div>
              <div className="col-sm-3">
                <button className='btn btn-warning btn-xs fs-6' onClick={()=>updateTask(objTarea.id,newValue)}>Update</button>
              </div>
            </div>
        )
    }

    const TodoElement = () => {
        return(
            <div className='row d-flex justify-content-center pt-4'>
              <div className="col-sm-9 ">
                <p className='fs-1 fw-bold bg-warning'>{objTarea.name}</p>
              </div>
              <div className="col-sm-3 d-flex justify-content-center">
                <button className='h-75 btn btn-success btn-xs fs-6 mx-1' onClick={()=>setIsEdit(true)}>Edit</button>
                <button className='h-75 btn btn-danger btn-xs fs-6' onClick={()=>deleteTask(objTarea.id)}>X</button>
              </div>
            </div>
        )
    }

    return(
            <div>
                {isEdit? <FormEdit/>:<TodoElement/>}
            </div>
    )
}