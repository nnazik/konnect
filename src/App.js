import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import '../src/assets/css/main.css'
import { Switch, Route } from 'react-router-dom';
import ResetPassword from './containers/ResetPassword';
import Login from './containers/Login';
import CreateEvent from './containers/CreateEvent';
import DashboardEvent from './containers/DashboardEvent';
import PlatformSearch from './containers/PlatformSearch';
import ManageConnections from './containers/ManageConnections';
import CompanyProfile from './containers/CompanyProfile';
import ManageColleagues from './containers/ManageColleagues';
import ResetPassword1 from './containers/ResetPassword1';
import CreateKenetProfile from './containers/CreateKenetProfile';
import ResetPassword2 from './containers/ResetPassword2';
import ResetPassword3 from './containers/ResetPassword3';
import CompanyTitle from './containers/CompanyTitle';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/CreateKenetProfile' component={CreateKenetProfile} />
        <Route exact path='/ResetPassword1' component={ResetPassword1} />
        <Route exact path='/ResetPassword2' component={ResetPassword2} />
        <Route exact path='/ResetPassword3' component={ResetPassword3} />
        <Route exact path='/CompanyTitle/:id' component={CompanyTitle} />
        <Route exact path='/resetpassword' component={ResetPassword} />
        <Route exact path='/createevent' component={CreateEvent} />
        <Route exact path='/dashboard' component={DashboardEvent} />
        <Route exact path='/platformsearch' component={PlatformSearch} />
        <Route exact path='/manageconnection' component={ManageConnections} />
        <Route exact path='/companyprofile' component={CompanyProfile} />
        <Route exact path="/managecolleague" component={ManageColleagues} />
      </Switch>
    </div>
  );
}

export default App;
