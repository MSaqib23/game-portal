import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre"
import getCroppedImage from "../services/image-url";

const GenreList = () => {
    const {data}=useGenre();
  return (
    <List >
        {data.map(gen=><ListItem key={gen.id} paddingY='5px' >
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImage(gen.image_background)}/>
            <Text fontSize='10md'>{gen.name}</Text></HStack>
        </ListItem>)}
        </List>
  )
}

export default GenreList