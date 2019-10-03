import React from 'react'
import { Tab } from 'semantic-ui-react'
import ManageConnectionPeople from '../components/manage/ManageConnectionPeople';
import ManageConnectionCompanies from '../components/manage/ManageConnectionCompanies';

const panes = [
  {
    menuItem: 'People',
    render: () => <Tab.Pane attached={false}><ManageConnectionPeople/></Tab.Pane>,
  },
  {
    menuItem: 'Companies',
    render: () => <Tab.Pane attached={false}><ManageConnectionCompanies/></Tab.Pane>,
  },
]

const ManageConnectionTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default ManageConnectionTab;