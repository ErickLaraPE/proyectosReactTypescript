
import { useState,useEffect } from "react"
import Axios from "axios"
import { Movie } from "./Movie"

export const MovieSearcher = () => {

    const [movies,setMovies] = useState([])
    const[movieName,setMovieName] = useState('')
    
    const APIKEY = '4c46602'
    const getAxiosMovies = async () => {
        try {
                const word = movieName
                const response = await Axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${word}`)
                const datos = await response.data
                if(datos.Search){
                    setMovies(datos.Search)
                }   
            } catch (error) {
                console.log(error)
            }
    }
    getAxiosMovies()
    const handleInput = (e:any) => {
        const titulo = e.target.value
        setMovieName(titulo)
    }
    return(
        <div>
            <input type='text' onChange={handleInput}/>
            <button>Search</button>
            {movies.map((mov)=>{
                return (
                    <Movie mov={mov}/>
                )
            })}
        </div>
    )

}