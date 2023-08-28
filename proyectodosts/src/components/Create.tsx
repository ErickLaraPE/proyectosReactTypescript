import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addProduct} from "./store"

export const Create = () => {

const [nombre,setNombre] = useState<String>('')
const [price,setPrice] = useState<Number>(0)
const [image,setImage] = useState<String>('')

const navigate = useNavigate()
const productos = useSelector((state:any)=>state.products)
const dispatch = useDispatch()

const agregaProduct = () => {
    const temp = [...productos]
    const temp2 = temp.find((obj)=> obj.name === nombre)
    if(!temp2){
        dispatch(addProduct({id:crypto.randomUUID(),name:nombre,price:price,image:image}))
        navigate('/')
    }
}

const handleChange = (e:any) => {
    const valorInput = e.target.value
    const nombreInput = e.target.name
    switch(nombreInput){
        case 'name':
                setNombre(valorInput)
                break
        case 'price':
                setPrice(valorInput)
                break
        default:
    }
}

const handleChangeFile = (e:any) => {
    const element = e.target
        const archivo = element.files[0]
        const lector = new FileReader() as any
        lector.onloadend = () =>  {
            setImage(lector.result.toString()) 
        }
        lector.readAsDataURL(archivo)
}

const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('enviado')
    agregaProduct()
}
    return(
        <div className="container-md my-3">
            <form onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center my-1">
                <label>Nombre:</label>
                <input className='w-25' type='text' onChange={handleChange} name='name' />
                </div>
                <div className="row d-flex justify-content-center my-1">
                <label>Precio:</label>
                <input className='w-25' type='text' onChange={handleChange} name='price' />
                </div>
                <div className="row d-flex justify-content-center my-1">
                <label>Imagen:</label>
                <input className="w-25" type='file' onChange={handleChangeFile} name='image' />
                </div>
                <div className="my-3">
                    <input className='btn btn-primary btn-xs' type="submit" value='Registrar'/>
                </div> 
            </form>
        </div>
    )
}