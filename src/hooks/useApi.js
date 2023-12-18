import { useEffect, useState } from "react"


export const useApi = (url) =>{
    
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);

    const fetchApi = () =>{
        fetch(url)
            
            .then(respuesta => respuesta.json())
            .then(respuestaJason => {
                setLoading(true);
                setData(respuestaJason.data)
                
            })
            .catch(error => console.log(error))
    }
    useEffect(() =>{
        fetchApi();
    }, [url])
    return {loading, data}
}