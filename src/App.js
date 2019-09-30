import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import '../src/assets/css/main.css'
import { Switch, Route} from 'react-router-dom';
import ResetPassword from './containers/ResetPassword';
import Login from './containers/Login';

function App() {
  return (
    <div>
       <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/resetpassword' component={ResetPassword}/>
      </Switch>
    </div>
  );
}

export default App;
