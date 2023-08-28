import {useState,useEffect} from 'react'
import Axios from "axios"

export const Catfact = () =>{

    const [factcat,setFactCat] = useState<string>('')
    const [imgCat,setImgCat] = useState<any>()
    const FACTLINK = 'https://catfact.ninja/fact'

 /*   useEffect(() => {
        /* Promises con fetch
        fetch(FACTLINK)
        .then(res=>res.json())
        .then(data=>setFactCat(data.fact))
        */
        /* Async-await con fetch
        const getFact = async() => {

            try{
                const resp = await fetch(FACTLINK)
                const data = await resp.json()
                setFactCat(data.fact)
            }
            catch(error){
                console.log(error)
            }
        }
        getFact()
        */
        /* Promises con axios
        Axios.get(FACTLINK)
             .then(res=> setFactCat(res.data.fact))
        */
        // Async-await con axios
 /*       const getAxiosFact = async() => {
            try{
                const response = await Axios.get(FACTLINK)
                const datos = await response.data
                setFactCat(datos.fact)
            }catch(error){
                console.log(error)
            }
        }
        getAxiosFact()

    },[])
    */

    //
/*    useEffect(() => {
        const getAxiosImage = async() => {
            try {
                const firstWord = factcat.split(' ')[0]
                const respImg = await Axios.get(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
                const dataImg = await respImg.data
                setImgCat(dataImg.url)
                console.log('promise de imagen completada')
            } catch (error) {
                console.log(error)
            }
        }
        getAxiosImage()
    },[factcat])
*/
/*
useEffect(() => {
    const AxiosGeneral = async () => {
        try{
            const res = await Axios.get(FACTLINK)
            const result = await res.data
           // const {fact,length} = result // destructuring del objeto data para obtener la propiedad fact
            setFactCat(result.fact)
            const firstWord = result.fact.split(' ')[0]
            const res2 = await Axios.get(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            const result2 = await res2.data
           // const {url} = result2
            setImgCat(result2.url)
        }catch(error){
            console.error(error)
        }
    }
    AxiosGeneral()
},[])
*/
useEffect(() => {
    const AxiosFact = async () => {
        try {
            const resp1 = await Axios.get(FACTLINK)
            const resp1obj = await resp1.data
            setFactCat(resp1obj.fact)
        } catch (error) {
            console.log(error)
        }
    }
    AxiosFact()
},[])
useEffect(() => {
    const AxiosImg = async () => {
        try {
            const f3Words = factcat.split(' ',3).join(' ')
            const resp2 = await Axios.get(`https://cataas.com/cat/says/${f3Words}?size=50&color=red&json=true`)
            const resp2obj = await resp2.data
            setImgCat(resp2obj.url)
        } catch (error) {
            console.log(error)
        }
    }
    AxiosImg()
},[factcat])

    return(
        <div className='cats'>
            <h1>App about cats</h1>
            <section>
            {factcat && <p>{factcat}</p>}
            {imgCat && <img className='mw-50 h-auto' src={`https://cataas.com${imgCat}`} alt={`The image that contains the first word of ${factcat}`}/>}
            </section>
        </div>
    )
}