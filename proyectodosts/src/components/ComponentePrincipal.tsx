import { BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import {Home} from './Home'
import {Create} from './Create'
import {Cart} from './Cart'
import {Provider} from 'react-redux'
import {store} from "./store";

export interface Producto {
    id:any,
    name:string,
    price:number,
    image:any
}

export interface ProductoCart {
    id:any,
    quantity:number
}

export const ComponentePrincipal = () => {
    return(
        <div>
            <Provider store={store}>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/create">Create</Link>
                        <Link to="/cart">Cart</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/create" element={<Create/>} />
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    )
}