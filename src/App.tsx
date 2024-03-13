
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformDropdwonList from './components/PlatformDropdownList'
import SortDropdownList from './components/SortDropdownList'

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg:'180px 1fr'
      }}>
      <GridItem area="nav" padding='10px'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside"  >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
        <GameHeading  />
        <HStack spacing={5}  marginBottom={5}>
            <PlatformDropdwonList/>
          <SortDropdownList/>
          </HStack>
          </Box>
        <GameGrid  />
      </GridItem>
    </Grid>

  )
}

export default App