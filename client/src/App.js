import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routers/AppRouter';


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <AppRouter/>
        {/* <Switch>
          <Route exact path='/' component={Login}  />
          <Route exact path='/control-seguro' component={ControlSeguridad}  />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
}
