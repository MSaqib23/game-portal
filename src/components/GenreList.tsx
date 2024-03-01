import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImage from "../services/image-url";

interface Props{
    onSelectedGenres: (genre:Genre) => void;
}
const GenreList = ({onSelectedGenres}:Props) => {
    const { data, isLoading, error } = useGenre();
    if (error) return null;
    if (isLoading) return <Spinner />;
  return (
    <List >
        {data.map(gen=><ListItem key={gen.id} paddingY='5px' >
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImage(gen.image_background)}/>
                <Button variant='link' fontSize='10md' onClick={()=>onSelectedGenres(gen)}>{gen.name}</Button>
            </HStack>
        </ListItem>)}
        </List>
  )
}

export default GenreList