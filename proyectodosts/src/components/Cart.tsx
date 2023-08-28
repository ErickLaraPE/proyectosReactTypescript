import {useSelector,useDispatch} from "react-redux"
import { Producto, ProductoCart } from "./ComponentePrincipal"
import { CartProduct } from "./CartProduct"
import { deleteCart,upQuantity,downQuantity } from "./store"

export const Cart = () => {

    const productos = useSelector((state:any)=>state.products)
    const productsCart = useSelector((state:any)=>state.cart)
    const dispatch = useDispatch()

    const handleCartDelete = (id:any)=>{
        dispatch(deleteCart(id))
    }
    const aumentaCantidad = (idCart:any)=>{
        dispatch(upQuantity(idCart))
    }
    const disminuyeCantidad = (idCart:any)=>{
        dispatch(downQuantity(idCart))
    }
    const getName = (idCart:any)=>{
        const temp = [...productos]
        const temp2 = temp.find((obj)=>obj.id === idCart)
        return temp2.name
    }

    const getPrice = (idCart:any) => {
        const temp = [...productos]
        const temp2 = temp.find((obj)=>obj.id === idCart)
        return temp2.price
    }

    const getImage = (idCart:any) => {
        const temp = [...productos]
        const temp2 = temp.find((obj)=>obj.id === idCart)
        return temp2.image
    }

    const getSubtotal = (idCart:any) => {
        const temp = [...productsCart]
        const temp2 = [...productos]
        const temp3 = temp.find((obj)=>obj.id === idCart)
        const temp4 = temp2.find((obj)=>obj.id === idCart)
        return temp3.quantity * temp4.price
    }

    const arrSubTotal = productsCart.map((objeto:ProductoCart) => {
        const temp = productos.find((obj:Producto)=>obj.id === objeto.id)
        return temp.price * objeto.quantity
    })

    const total = arrSubTotal.reduce((acum:any,current:any) => acum + current,0)

    return(
        <div>
          <div className='container-lg d-flex justify-content-start flex-wrap'>
             <div>{(productsCart.length===1)?"Empty cart":""}</div>
             {productsCart.map((objProductCart:ProductoCart)=>{
                return(
                    <CartProduct objProductCart={objProductCart} handleCartDelete={handleCartDelete} getName={getName} getPrice={getPrice} getImage={getImage} aumentaCantidad={aumentaCantidad} disminuyeCantidad={disminuyeCantidad} getSubtotal={getSubtotal}/>
                )
             })}
          </div>
            <p className='fs-3 fw-bold'>Total: {total}</p>
        </div>
    )


}