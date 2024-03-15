import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APICLIENT<Game>('games');
const useGameDetail = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: ()=>apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000
})

export default useGameDetail;   