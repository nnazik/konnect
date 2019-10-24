import React from 'react'
import { Tab } from 'semantic-ui-react'
import EventClient from './events/EventClient';
import EventManager from './events/EventManager';
import EventVenue from './events/EventVenue';
import EventSupplierTab from './EventSupplierTab';
import EventExhibitors from './events/EventExhibitors';
import EventFile from './events/EventFile';

const panes = status => [
  {
    menuItem: { key: 'clients', icon: 'cog', content: 'CLIENT' },
    render: () => <Tab.Pane attached={false}><EventClient  data={status}/></Tab.Pane>,
  },
  {
    menuItem: { key: 'event manager', icon: 'sitemap', content: 'EVENT MANAGER' },
    render: () => <Tab.Pane attached={false}><EventManager data={status} /></Tab.Pane>,
  },
  {
    menuItem: { key: 'venue', icon: 'map marker alternate', content: 'VENUE' },
    render: () => <Tab.Pane attached={false}><EventVenue data={status} /></Tab.Pane>,
  },
  {
    menuItem: { key: 'suppliers', icon: 'truck', content: 'SUPPLIERS' },
    render: () => <Tab.Pane attached={false}><EventSupplierTab data={status} /></Tab.Pane>,
  },
  {
    menuItem: { key: 'exhibitors', icon: 'users', content: 'EXHIBITORS' },
    render: () => <Tab.Pane attached={false}><EventExhibitors data={status} /></Tab.Pane>,
  },
  {
    menuItem: { key: 'files', icon: 'file alternate', content: 'FILES' },
    render: () => <Tab.Pane attached={false}><EventFile data={status}/></Tab.Pane>,
  },
  {
    menuItem: { key: 'timeline', icon: 'clock', content: 'TIMELINE' },
    render: () => <Tab.Pane attached={false}>Event Timeline Content</Tab.Pane>,
  },
]

const CreateEventTab = (props) => (
  <Tab menu={{ secondary: true, pointing: true }}  panes={panes(props.data)} />
)

export default CreateEventTab;