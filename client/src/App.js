import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/login/Login';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
