import {configureStore,createSlice} from "@reduxjs/toolkit"
import { BookInterface } from "../components/CompPrincipal"

const initialState:BookInterface[] = [
    {
        id:0,
        title:'',
        author:'',
        cover:'',
        intro:'',
        completed:false,
        review:''
    }
]
    
const bookSlice = createSlice({
    name:"books",
    initialState: initialState,
    reducers:{
            addBook:(state,action)=>{
                state.push(action.payload)
            },
            deleteBook:(state,action)=>{
                const bookFound = state.find((obj)=>obj.id === action.payload) as BookInterface
                if(bookFound){
                    state.splice(state.indexOf(bookFound),1)
                }
            }
    }
})

export const store = configureStore({
    reducer:{
        books:bookSlice.reducer
    }
})

export const {addBook,deleteBook} = bookSlice.actions


