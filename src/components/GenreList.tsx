import { Box, Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImage from "../services/image-url";

interface Props{
    onSelectedGenres: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({selectedGenre,onSelectedGenres}:Props) => {
    const { data, isLoading, error } = useGenre();
    if (error) return null;
    if (isLoading) return <Box paddingX={10}><Spinner  /></Box>;
    return (
        <>
      <Heading fontSize='2xl' paddingX={5}>Genres</Heading>
    <List >
        {data?.results.map(gen=><ListItem key={gen.id} paddingY='5px' >
        <HStack marginX={-3}>
            <Image boxSize='32px' objectFit="cover" borderRadius={8} src={getCroppedImage(gen.image_background)}/>
                <Button whiteSpace='normal' textAlign='left' fontWeight={gen.id==selectedGenre?.id?'bold':'normal'}  variant='link' fontSize='10md' onClick={()=>onSelectedGenres(gen)}>{gen.name}</Button>
            </HStack>
        </ListItem>)}
            </List>
            </>
  )
}

export default GenreList