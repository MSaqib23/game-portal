import useGenre from "../hooks/useGenre"

const GenreList = () => {
    const {genres}=useGenre();
  return (
    <ul>{genres.map(gen=><li key={gen.id}>{gen.name}</li>)}</ul>
  )
}

export default GenreList