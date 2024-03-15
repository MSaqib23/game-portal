import { useQuery } from "@tanstack/react-query"
import APICLIENT from "../services/api-client"
import Screenshot from "../entities/Screenshot"

const useScreenshot = (gameId: number) => {
    const apiClient=new APICLIENT<Screenshot>(`games/${gameId}/screenshots`)
    return useQuery({
        queryKey: ['screenshot', gameId],
        queryFn: apiClient.getAll,
        staleTime: 24*60*60*1000
    })
}
export default useScreenshot;