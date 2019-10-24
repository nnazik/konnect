import React from 'react'
import { Tab } from 'semantic-ui-react'
import EventSupplier from './events/EventSupplier';

const panes =status=> [
  {
    menuItem: {key: 'vanue', icon: 'map marker alternate', content: 'International Convention Centre, Sydney'},
    render: () => <Tab.Pane><EventSupplier data={status}/></Tab.Pane>,
  }
]

const EventSupplierTab = (props) => (
  <Tab panes={panes(props.data)} />
)

export default EventSupplierTab;