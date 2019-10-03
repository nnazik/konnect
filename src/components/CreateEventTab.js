import React from 'react'
import { Tab } from 'semantic-ui-react'
import EventClient from './events/EventClient';
import EventManager from './events/EventManager';
import EventVenue from './events/EventVenue';
import EventSuppliers from './events/EventSupplier';
import EventExhibitors from './events/EventExhibitors';
import EventFile from './events/EventFile';

const panes = [
  {
    menuItem: { key: 'clients', icon: 'cog', content: 'CLIENT' },
    render: () => <Tab.Pane attached={false}><EventClient/></Tab.Pane>,
  },
  {
    menuItem: { key: 'event manager', icon: 'sitemap', content: 'EVENT MANAGER' },
    render: () => <Tab.Pane attached={false}><EventManager/></Tab.Pane>,
  },
  {
    menuItem: { key: 'venue', icon: 'map marker alternate', content: 'VENUE' },
    render: () => <Tab.Pane attached={false}><EventVenue/></Tab.Pane>,
  },
  {
    menuItem: { key: 'suppliers', icon: 'truck', content: 'SUPPLIERS' },
    render: () => <Tab.Pane attached={false}><EventSuppliers/></Tab.Pane>,
  },
  {
    menuItem: { key: 'exhibitors', icon: 'users', content: 'EXHIBITORS' },
    render: () => <Tab.Pane attached={false}><EventExhibitors/></Tab.Pane>,
  },
  {
    menuItem: { key: 'files', icon: 'file alternate', content: 'FILES' },
    render: () => <Tab.Pane attached={false}><EventFile/></Tab.Pane>,
  },
  {
    menuItem: { key: 'timeline', icon: 'clock', content: 'TIMELINE' },
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

const CreateEventTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default CreateEventTab;