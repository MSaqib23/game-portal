import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import APICLIENT, { FetchResponse } from "../services/api-client";

export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    metacritic: number,
    rating_top:number
}

const apiClient = new APICLIENT<Game>('/games');
const useGame = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>,Error>({
        queryKey: ['games', gameQuery],
        queryFn: ()=>apiClient.getAll({
             params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search:gameQuery.searchText
            }
        })
    })
    
export default useGame;
