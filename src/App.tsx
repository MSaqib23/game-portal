
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformDropdwonList from './components/PlatformDropdwonList'
const App = () => {
  const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null);
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg:'200px 1fr'
      }}>
      <GridItem area="nav" padding='10px'><NavBar/></GridItem>
      <Show above='lg'>
        <GridItem area="aside"  ><GenreList selectedGenre={selectedGenre} onSelectedGenres={(genre)=>setSelectedGenre(genre) } /></GridItem>
      </Show>
      <GridItem area="main">
        <PlatformDropdwonList/>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>

  )
}

export default App