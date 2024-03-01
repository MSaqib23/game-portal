import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder:string
}
const SortDropdownList = ({selectedSortOrder,onSelectSortOrder}:Props) => {

    const sortOrders = [
        { code: '', value: 'Relevance' },
        { code: '-added', value: 'Date Added' },
        { code: 'name', value: 'Name' },
        { code: '-released', value: 'Release date' },
        { code: '-metacritic', value: 'Popularity' },
        { code: '-rating', value: 'Average rating' }
    ];
    const currentSelection = sortOrders.find(so => so.code === selectedSortOrder);
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