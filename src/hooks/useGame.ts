import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number,
    name:string,
    slug:string
}
export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    metacritic:number
}
interface GameResponse{
    count:number,
    results: Game[]
}

const useGame = () => {
    const controller=new AbortController();
   const [games,setGames]=useState<Game[]>([]);
    const [error,setError]=useState<string>('');
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient.get<GameResponse>('/games',{signal:controller.signal})
        .then(res=>{
            setGames(res.data.results);
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

    return {games,error,isLoading}
}

export default useGame;
