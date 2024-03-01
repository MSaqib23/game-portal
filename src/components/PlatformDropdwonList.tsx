import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform, { Platform } from "../hooks/usePlatform"

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformDropdwonList = ({selectedPlatform,onSelectPlatform}:Props) => {
    const { data, error } = usePlatform();
    { if (error) return null; }
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platforms" }</MenuButton>
          <MenuList>
              {data.map(pf => <MenuItem onClick={()=>onSelectPlatform(pf)} key={pf.id}>{pf.name }</MenuItem>)}
          </MenuList>
    </Menu>
  )
}

export default PlatformDropdwonList