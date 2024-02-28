import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number,
    name:string
}
interface GenreResponse{
    count:number,
    results: Genre[]
}

const useGenre=()=>{
 const controller=new AbortController();
   const [genres,setGenres]=useState<Genre[]>([]);
    const [error,setError]=useState<string>('');
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient.get<GenreResponse>('/genres',{signal:controller.signal})
        .then(res=>{
            setGenres(res.data.results);
            setLoading(false);
            }
        )
        .catch((err)=>
            {
                if( err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
    },[])

    return {genres,error,isLoading}
}
export default useGenre;