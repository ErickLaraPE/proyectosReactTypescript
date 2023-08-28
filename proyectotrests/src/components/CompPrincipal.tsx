import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import { Provider } from "react-redux"
import {store} from '../utils/store'
import {Home} from '../pages/Home'
import {Create} from "../pages/Create"
import { View } from "./View"

export interface BookInterface {
    id:any,
    title:string,
    author:string,
    cover:any,
    intro:string,
    completed:boolean,
    review:string
}

export const CompPrincipal = () => {

    return(
        <div>
            <Provider store={store}>
                <Router>
                    <div>
                        <ul className='nav d-flex justify-content-center align-items-center'>
                            <li className='nav-item mx-2'>
                                <Link className='nav-link text-success bg-warning' to='/'>Home</Link>
                            </li>
                            <li className='nav-item mx-2'>
                                <Link className='nav-link text-success bg-warning' to='/create'>Create</Link>
                            </li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/create' element={<Create/>}/>
                        <Route path='/view/:bookId' element={<View/>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>
    )


}