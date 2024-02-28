import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/image-url"

interface Prop{
    game: Game
}
const GameCard = ({game}:Prop) => {
  return (
    <Card width='300px' borderRadius='10px' overflow="hidden">
        <Image src={getCroppedImage(game.background_image)}/>
        <CardBody >
            <Heading fontSize='xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard