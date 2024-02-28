import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T>{
    count:number,
    results: T[]
}

const useData=<T>(endpoint:string)=>{
 const controller=new AbortController();
   const [data,setData]=useState<T[]>([]);
    const [error,setError]=useState<string>('');
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal})
        .then(res=>{
            setData(res.data.results);
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

    return {data,error,isLoading}
}
export default useData;