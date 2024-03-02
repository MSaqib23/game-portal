
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformDropdwonList from './components/PlatformDropdownList'
import { Platform } from './hooks/usePlatform'
import SortDropdownList from './components/SortDropdownList'
import GameHeading from './components/GameHeading'
export interface GameQuery{
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
  searchText:string
}
const App = () => {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg:'180px 1fr'
      }}>
      <GridItem area="nav" padding='10px'><NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText }) } /></GridItem>
      <Show above='lg'>
        <GridItem area="aside"  ><GenreList selectedGenre={gameQuery.genre} onSelectedGenres={(genre) => setGameQuery({...gameQuery ,genre }) } /></GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
        <GameHeading gameQuery={ gameQuery} />
        <HStack spacing={5}  marginBottom={5}>
        <PlatformDropdwonList selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortDropdownList selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </HStack>
          </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App