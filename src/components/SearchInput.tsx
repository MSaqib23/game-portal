import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";


const SearchInput = () => {
    const setSearchText=useGameQueryStore(s=>s.setSearchText);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate=useNavigate();
    return (
        <form  style={{width:'100%'}} onSubmit={(event) => {
            event.preventDefault();
            if (inputRef.current)
            {
                setSearchText(inputRef.current.value);
                navigate('/');
            }
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input name='searchText' ref={inputRef} borderRadius={20} placeholder="Search games..." variant="filled" />
            </InputGroup>
            </form>
  )
}

export default SearchInput