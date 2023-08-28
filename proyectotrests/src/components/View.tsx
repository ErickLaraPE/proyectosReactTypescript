
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {useSelector} from 'react-redux'
import { BookInterface } from "./CompPrincipal"

export const View = () => {
    
    const [item,setItem] = useState<BookInterface>()
    const books = useSelector((state:any)=>state.books)
    const params = useParams()

    useEffect(()=>{
        const temp = [...books]
        const book = temp.find((obj)=>obj.id === params.bookId)
        setItem(book) 
    },[])

    if (!item){
        return  <div>Book not found</div>
    }
    return(
            <div className='d-flex flex-column align-items-center'>
                <h2>{item?.title}</h2>
                <div>{item?.cover ? <img src={item.cover} width="400" alt={item?.title} /> : ""}</div>
                <div className="view">{item?.author}</div>
                <div className="view">{item?.intro}</div>
                <div className="view">{item?.completed ? "Leido" : "Por terminar"}</div>  
                <div className="view">{item?.review}</div>
            </div>
    )
}
