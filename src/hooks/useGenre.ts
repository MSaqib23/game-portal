import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import genres from "../data/genres";
import Genre from "../entities/Genre";

const apiClient = new APICLIENT<Genre>('/genres');

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData:genres
})

export default useGenre;