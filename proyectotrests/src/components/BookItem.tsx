import { BookInterface } from "./CompPrincipal"
import {Link} from 'react-router-dom'

interface BookInterfaceInt {
    objBook : BookInterface,
    handleDelete: (id:any)=>void
}

export const BookItem = ({objBook,handleDelete}:BookInterfaceInt) => {

    return(
        <div className='col-md-4 mx-2' >
            <Link to={`/view/${objBook.id}`}>
                <img src={objBook.cover} width='200' alt={objBook.title}/>
                <p className="text-secondary fs-3 fw-bold">{objBook.title}</p>
            </Link>
            {objBook.title !== '' ? <button className='btn btn-danger btn-xs' onClick={()=>handleDelete(objBook.id)}>Eliminar</button>: '' }
        </div>
    )

}