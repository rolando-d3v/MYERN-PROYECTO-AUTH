import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ControlSeguridad from './pages/controlSeguridad/ControlSeguridad';
import Login from './pages/login/Login';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}  />
          <Route exact path='/control-seguro' component={ControlSeguridad}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
