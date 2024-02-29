import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre"
import getCroppedImage from "../services/image-url";

const GenreList = () => {
    const { data, isLoading, error } = useGenre();
    if (error) return null;
    if (isLoading) return <Spinner />;
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