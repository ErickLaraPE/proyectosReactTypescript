import {useState,useEffect} from 'react'
import Axios from "axios"
import { User } from './User'

export const SearchingBox = () => {

    const [user,setUser] = useState<any[]>([])
    const [filtereduser,setFilteredUser] = useState<any[]>([])
    const [query,setQuery] = useState<string>('')

useEffect(() => {
    const getUser = async () => {
        try {
            const resp = await Axios.get('https://randomuser.me/api/?results=10')
            const datos = await resp.data
            setUser(datos.results)
            setFilteredUser(datos.results)
        } catch (error) {
            console.log(error)
        }
    }
    getUser()
},[])

const filtering = (cadena:string) => {
    const temp = [...user]
    const temp2 = temp.filter(obj => obj.name.first.includes(cadena))
    setFilteredUser(temp2)
    setQuery(cadena)
}

const separaCadena = (item:string,valor:string) => {

    const left = item.slice(0,item.indexOf(valor))
    const center = item.slice(item.indexOf(valor),item.indexOf(valor)+valor.length)
    const right = item.slice(item.indexOf(valor)+valor.length)

    return {
        left,center,right
    }
}
    return(
        <div className='principal'>
            <input className='searching' onChange={(e)=>filtering(e.target.value)} type='text' />
            {filtereduser.length !== 0 ? filtereduser.map(obj => {
                return(
                    <User obj={obj} val={query} separaCadena={separaCadena}/>
                )
            }) : <p style={{fontWeight:'bolder'}}>No matches</p>}
        </div>
    )
}





