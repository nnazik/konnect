import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleDropdown = () => (
  <Dropdown text='Company 1'>
    <Dropdown.Menu>
      <Dropdown.Item text='Company 1' />
      <Dropdown.Item text='Company 2'/>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDropdown;