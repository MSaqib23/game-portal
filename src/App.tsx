
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
const App = () => {
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
      <GridItem area="aside" marginX='-14px' ><GenreList/></GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid/>
      </GridItem>
    </Grid>

  )
}

export default App