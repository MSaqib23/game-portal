import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform, { Platform } from "../hooks/usePlatform"
import usePlatformLookup from "../hooks/usePlatformLookup";

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}
const PlatformDropdownList = ({selectedPlatformId,onSelectPlatform}:Props) => {
    const { data, error } = usePlatform();
    const selectedPlatform = usePlatformLookup(selectedPlatformId);
    { if (error) return null; }
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platforms" }</MenuButton>
          <MenuList>
              {data?.results.map(pf => <MenuItem onClick={()=>onSelectPlatform(pf)} key={pf.id}>{pf.name }</MenuItem>)}
          </MenuList>
    </Menu>
  )
}

export default PlatformDropdownList