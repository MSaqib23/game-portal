import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLIENT from "../services/api-client";
import { Platform } from "../entities/Platform";


const apiClient = new APICLIENT<Platform>('/platforms/lists/parents');
const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData:platforms
})
export default usePlatform;