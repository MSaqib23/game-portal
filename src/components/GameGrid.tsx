import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
  const {data,error,isLoading} =useGame();
  const skeletons=[1,2,3,4,5,6];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{ sm:1,md:2,lg:3,xl:5}} padding='10px' spacing='10px'>
        {isLoading && skeletons.map(sk=><GameCardContainer><GameCardSkeleton key={sk}/></GameCardContainer>)}
        {
            data.map(game=>(<GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>))
    }
    </SimpleGrid>
    </>
  )
}

export default GameGrid