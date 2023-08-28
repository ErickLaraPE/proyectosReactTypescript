import { ProductoCart } from "./ComponentePrincipal"

interface ProductoCartInt {
    objProductCart:ProductoCart,
    handleCartDelete:(id:any)=>void,
    getName:(id:any)=>any,
    getPrice:(id:any)=>any,
    getImage:(id:any)=>any,
    aumentaCantidad:(id:any)=>any,
    disminuyeCantidad:(id:any)=>any,
    getSubtotal:(id:any)=>any
}

export const CartProduct = ({objProductCart,handleCartDelete,getName,getPrice,getImage,aumentaCantidad,disminuyeCantidad,getSubtotal}:ProductoCartInt) => {
    return(
        <div className='col-lg-4'>
            {(getPrice(objProductCart.id))===0? '': <img src={getImage(objProductCart.id)} width="300" alt="preview"/>}
            <p className='fs-4 fw-bold'>{getName(objProductCart.id)}</p>
            <p className='fs-4 fw-bold'>{(getPrice(objProductCart.id))===0? '':getPrice(objProductCart.id)}</p>
            <div className="container-sm d-flex justify-content-center flex-wrap">
            <div className='col-xs-3'>
              {(getPrice(objProductCart.id))===0? '':<button className="btn btn-primary mx-1" onClick={()=>disminuyeCantidad(objProductCart.id)}>-</button>}
            </div>  
            <div className='col-xs-3'>
             <p className='fs-4 fw-bold'>{(getPrice(objProductCart.id))===0? '': objProductCart.quantity.toString()}</p>
            </div>
            <div className='col-xs-3'>
            {(getPrice(objProductCart.id))===0? '':<button className="btn btn-primary mx-1" onClick={()=>aumentaCantidad(objProductCart.id)}>+</button>}
            </div>
            <div className='col-xs-3'>
            {(getPrice(objProductCart.id))===0? '':<button className="btn btn-danger mx-1" onClick={()=>handleCartDelete(objProductCart.id)}>X</button>}
            </div>  
            </div>
            {(getPrice(objProductCart.id))===0? '':<p className='fs-3 fw-bold'>Subtotal: {getSubtotal(objProductCart.id)}</p>}
        </div>
    )
}