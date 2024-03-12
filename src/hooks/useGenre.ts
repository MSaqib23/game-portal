import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import genres from "../data/genres";

export interface Genre{
    id:number,
    name:string,
    image_background:string
}

const apiClient = new APICLIENT<Genre>('/genres');

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData:{count:genres.length,results:genres,next:null}
})

export default useGenre;