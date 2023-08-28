import {Producto} from './ComponentePrincipal'

interface ProductoInt {
    objProd:Producto
    handleDelete:(id:any)=>void
    agregaCart:(id:any)=>void
}

export const Product = ({objProd,handleDelete,agregaCart}:ProductoInt)=> {
    return(
            <div className='col-lg-4'>
                {(objProd.price === 0)? '':<img src={objProd.image} width="300" alt="preview"/>}
                <p className='fs-4 fw-bold'>{objProd.name}</p>
                <p className='fs-6 fw-normal'>{(objProd.price === 0)? '':objProd.price.toString()}</p>
                {(objProd.price !== 0)? <button className='btn btn-success mx-3' onClick={()=>agregaCart(objProd.id)} >Agregar al carrito</button>:''}
                {(objProd.price !== 0)? <button className='btn btn-danger' onClick={()=>handleDelete(objProd.id)} >Delete</button>:''}
            </div>
    )
}