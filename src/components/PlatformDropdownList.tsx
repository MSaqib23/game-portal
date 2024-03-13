import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGameQueryStore from "../store";


const PlatformDropdownList = () => {
    const { data, error } = usePlatform();
    const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId);
    const selectedPlatform = usePlatformLookup(selectedPlatformId);

    const onSelectPlatform = useGameQueryStore(s=>s.setPlatformId);
    { if (error) return null; }
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platforms" }</MenuButton>
          <MenuList>
              {data?.results.map(pf =>
                  <MenuItem onClick={() => onSelectPlatform(pf.id)} key={pf.id}>{pf.name}
                  </MenuItem>
              )}
          </MenuList>
    </Menu>
  )
}

export default PlatformDropdownList