import { configureStore,createSlice } from "@reduxjs/toolkit"
import { Producto,ProductoCart } from "./ComponentePrincipal"

const initialStateProducto:Producto[] = [
    {
        id:0,
        name:"",
        price:0,
        image:""
    }
]
const productSlice = createSlice({
    name:"products",
    initialState: initialStateProducto,
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },
        deleteProduct:(state,action)=>{
            const productFound = state.find(product => product.id === action.payload) as Producto
            if(productFound){
                state.splice(state.indexOf(productFound),1)
            }
        }   
    }
})
const initialStateCart:ProductoCart[] = [
    {
        id:0,
        quantity:0
    }
]
const cartSlice = createSlice({
    name:"cart",
    initialState:initialStateCart,
    reducers:{
        addCart:(state,action) => {
            const cartFound = state.find(cart => cart.id === action.payload.id) as ProductoCart
            if(cartFound){
                cartFound.quantity += 1 
            } else{
                state.push(action.payload)
            }
        },
        deleteCart:(state,action) => {
            const cartFound = state.find(cart => cart.id === action.payload) as ProductoCart
            if(cartFound){
                state.splice(state.indexOf(cartFound),1)
            }
        },
        upQuantity:(state,action) => {
            const cartFound = state.find(cart => cart.id === action.payload) as ProductoCart
            if(cartFound){
               cartFound.quantity += 1 
            }
        },
        downQuantity:(state,action) => {
            const cartFound = state.find(cart => cart.id === action.payload) as ProductoCart
            if(cartFound){
                if(cartFound.quantity > 0){
                   cartFound.quantity -= 1 
                }
            }
        }
    }
})
export const store = configureStore({
    reducer: {
            products: productSlice.reducer,
            cart: cartSlice.reducer
    }
}) 
export const {addProduct,deleteProduct} = productSlice.actions
export const {addCart,deleteCart,upQuantity,downQuantity} = cartSlice.actions

