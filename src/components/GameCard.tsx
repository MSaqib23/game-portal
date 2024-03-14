import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/image-url"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"

interface Prop{
    game: Game
}
const GameCard = ({game}:Prop) => {
  return (
    <Card >
        <Image src={getCroppedImage(game.background_image)}/>
        <CardBody >
            
            <HStack justifyContent='space-between' paddingBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
              </HStack>
              <Heading fontSize='18px'>
                  <Link to={'/games/'+game.slug}>
                      {game.name}
                    </Link>
              </Heading>
              <Emoji rating={game.rating_top } />
        </CardBody>
    </Card>
  )
}

export default GameCard