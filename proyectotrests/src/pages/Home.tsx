import {useSelector,useDispatch} from 'react-redux'
import { BookItem } from '../components/BookItem'
import { BookInterface } from '../components/CompPrincipal'
import {deleteBook} from '../utils/store'

export const Home = () => {
    
    const books = useSelector((state:any)=>state.books)
    const dispatch = useDispatch()

    const handleDelete = (id:any) => {
        dispatch(deleteBook(id))
    }
    
    return(
        <div className='container-md d-flex flex-wrap'>
            {books?.map((objBook:BookInterface)=> {
                return(
                    <BookItem objBook={objBook} handleDelete={handleDelete}/>
                )
            })}
        </div>
    )
}