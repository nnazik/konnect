import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import '../src/assets/css/main.css'
import { Switch, Route} from 'react-router-dom';
import ResetPassword from './containers/ResetPassword';
import Login from './containers/Login';
import CreateEvent from './containers/CreateEvent';
import DashboardEvent from './containers/DashboardEvent';
import PlatformSearch from './containers/PlatformSearch';
import ManageConnections from './containers/ManageConnections';

function App() {
  return (
    <div>
       <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/resetpassword' component={ResetPassword}/>
            <Route exact path='/createevent' component={CreateEvent}/>
            <Route exact path='/dashboard' component={DashboardEvent}/>
            <Route exact path='/platformsearch' component={PlatformSearch}/>
            <Route exact path='/manageconnection' component={ManageConnections}/>
      </Switch>
    </div>
  );
}

export default App;
