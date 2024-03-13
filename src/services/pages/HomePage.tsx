import { Box,Grid, Show, GridItem, HStack } from "@chakra-ui/react"
import GameGrid from "../../components/GameGrid"
import GameHeading from "../../components/GameHeading"
import GenreList from "../../components/GenreList"
import PlatformDropdwonList from '../../components/PlatformDropdownList'
import SortDropdownList from "../../components/SortDropdownList"

const HomePage = () => {
  return (
    <Grid templateAreas={{
      base:`"main"`,
      lg:`"aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg:'180px 1fr'
      }}>
      
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

export default HomePage