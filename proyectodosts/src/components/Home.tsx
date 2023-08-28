import {useSelector,useDispatch} from "react-redux"
import { Producto } from "./ComponentePrincipal"
import { Product } from "./Product"
import { addCart,deleteProduct } from "./store"

export const Home = () => {

    const productos = useSelector((state:any)=>state.products)
    const dispatch = useDispatch()

    const handleDelete = (id:any) => {
        dispatch(deleteProduct(id))
    }
    const agregaCart = (idProd:any) => {
        const temp = [...productos]
        const prCart = temp.find((obj) => obj.id === idProd)
        dispatch(addCart({id:prCart.id,quantity:1}))
    }
    return(
        <div className='container-lg d-flex justify-content-start flex-wrap'>
            {productos.map((objProd:Producto) => {
                return(
                    <Product objProd={objProd} handleDelete={handleDelete} agregaCart={agregaCart}/>
                )
            })}
        </div>
    )
}