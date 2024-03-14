import { useInfiniteQuery } from "@tanstack/react-query";
import APICLIENT, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatform";

export interface Game{
    id:number,
    name: string,
    slug: string,
    description_raw:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    metacritic: number,
    rating_top:number
}

const apiClient = new APICLIENT<Game>('/games');
const useGame = () => {
    const gameQuery = useGameQueryStore(s=>s.gameQuery);
   return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        initialPageParam: undefined,
        staleTime: 24 * 60 * 60 * 1000
    });
}
    
export default useGame;
