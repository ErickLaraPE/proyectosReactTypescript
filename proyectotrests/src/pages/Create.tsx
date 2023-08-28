import { useState } from "react"
import { addBook } from "../utils/store"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'

export const Create = () => {
    
    const [title,setTitle] = useState<string>('')
    const [author,setAuthor] = useState<string>('')
    const [cover,setCover] = useState<string>('')
    const [intro,setIntro] = useState<string>('')
    const [completed,setCompleted] = useState<boolean>(false)
    const [review,setReview] = useState<string>('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const books = useSelector((state:any)=>state.books)

    const agregaBook = (nombre:string) => {
        const temp = [...books]
        const bookFound = temp.find((obj) => obj.title === nombre)
        if(!bookFound){
            dispatch(addBook({id:crypto.randomUUID(),title:title,author:author,cover:cover,intro:intro,completed:completed,review:review}))
            navigate('/')
        }
    }
    
    const handleChange = (e:any) => {
        const valor = e.target.value
        const name = e.target.name
        switch(name){
            case 'title':   
                          setTitle(valor)
                          break
            case 'author':
                          setAuthor(valor)
                          break
            case 'intro':
                          setIntro(valor)
                          break
            case 'completed': 
                          setCompleted(true)    
                          break
            case 'review':
                          setReview(valor)
                          break  
            default:
                          break              
        }
    }

    const handleChangeFile = (e:any) => {
        const element = e.target
        const archivo = element.files[0]
        const lector = new FileReader() as any
        lector.onloadend = () =>  {
            setCover(lector.result.toString()) 
        }
        lector.readAsDataURL(archivo)
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        console.log('enviado')
        agregaBook(title)
    }

    return(
        <div>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className="d-flex w-25 justify-content-center my-4">
                    <label>Title:</label>
                    <input className="mx-2" type='text' onChange={handleChange} name='title'/>
                </div>
                <div className="d-flex w-25 justify-content-center my-4">
                    <label>Author:</label>
                    <input className="mx-2" type='text' onChange={handleChange} name='author'/>
                </div>
                <div className="d-flex w-25 justify-content-center my-4">
                    <label>Cover:</label>
                    <input className="mx-2" type='file' onChange={handleChangeFile} name='cover'/>
                </div>
                <div className="d-flex w-25 justify-content-center my-4">
                    <label>Introduction:</label>
                    <input className="mx-2" type='text' onChange={handleChange} name='intro'/>
                </div>
                <div className="d-flex w-25 justify-content-center my-4">
                    <label>Completed:</label>
                    <input className="mx-2" type='checkbox' onChange={handleChange} name='completed'/>
                </div>
                <div className="d-flex w-25 justify-content-center my-4">
                    <label>Review:</label>
                    <textarea className="mx-2" onChange={handleChange} name='review'/>
                </div>
                <div className="d-flex w-25 justify-content-center my-4">
                    <input className='btn btn-success btn-xs' type='submit' value={'Register book'}/>
                </div>
            </form>
        </div>
    )
}