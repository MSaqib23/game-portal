import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortDropdownList = () => {

    const sortOrders = [
        { code: '', value: 'Relevance' },
        { code: '-added', value: 'Date Added' },
        { code: 'name', value: 'Name' },
        { code: '-released', value: 'Release date' },
        { code: '-metacritic', value: 'Popularity' },
        { code: '-rating', value: 'Average rating' }
    ];
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSelection = sortOrders.find(so => so.code === selectedSortOrder);
    const onSelectSortOrder = useGameQueryStore(s => s.setSortOrder);
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Order by: { currentSelection?.value||"Relevance"}
          </MenuButton>
          <MenuList>
              {sortOrders.map(so => <MenuItem onClick={()=>onSelectSortOrder(so.code)} key={so.code}>{ so.value}</MenuItem>)}
              </MenuList>
    </Menu>
  )
}

export default SortDropdownList