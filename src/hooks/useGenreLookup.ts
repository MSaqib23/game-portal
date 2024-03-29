import useGenre from "./useGenre";

const useGenreLookup = (id?:number) => {
    const { data: genres } = useGenre();
    return genres?.results.find(g => g.id === id);
 }

export default useGenreLookup;