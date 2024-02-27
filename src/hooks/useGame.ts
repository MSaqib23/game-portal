import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game{
    id:number,
    name:string
}
interface GameResponse{
    count:number,
    results: Game[]
}

const useGame = () => {
    const controller=new AbortController();
   const [games,setGames]=useState<Game[]>([]);
    const [error,setError]=useState<string>('');

    useEffect(()=>{
        apiClient.get<GameResponse>('/games',{signal:controller.signal})
        .then(res=>setGames(res.data.results))
        .catch((err)=>
            {
                if( err instanceof CanceledError) return;
                setError(err.message)
            });
    },[])

    return {games,error}
}

export default useGame;
