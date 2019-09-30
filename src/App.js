import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import '../src/assets/css/main.css'
import { Switch, Route} from 'react-router-dom';
import ResetPassword from './containers/ResetPassword';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div>
       <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/resetpassword' component={ResetPassword}/>
            <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
