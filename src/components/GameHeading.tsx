import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatformLookup from "../hooks/usePlatformLookup"
import useGenreLookup from "../hooks/useGenreLookup"
interface Props{
    gameQuery:GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    const genre = useGenreLookup(gameQuery.genreId);
    const platform = usePlatformLookup(gameQuery.platformId);
    const heading=`${platform?.name || ''} ${genre?.name || ''} Games`
  return (
      <Heading as='h1' marginY={5} fontSize='5xl'>{ heading}</Heading>
  )
}

export default GameHeading