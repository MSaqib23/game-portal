
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformDropdwonList from './components/PlatformDropdownList'
import SortDropdownList from './components/SortDropdownList'
export interface GameQuery{
  genreId?: number,
  platformId?: number,
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
        <GridItem area="aside"  >
          <GenreList selectedGenreId={gameQuery.genreId} onSelectedGenres={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} /></GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
        <GameHeading gameQuery={ gameQuery} />
        <HStack spacing={5}  marginBottom={5}>
        <PlatformDropdwonList selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId:platform.id })} />
          <SortDropdownList selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </HStack>
          </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App