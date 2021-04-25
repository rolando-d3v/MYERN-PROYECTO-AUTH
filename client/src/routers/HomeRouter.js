import { Redirect, Route, Switch } from "react-router-dom";
import ControlSeguridad from "../pages/controlSeguridad/ControlSeguridad";
import Home from "../pages/home/Home";


export default function HomeRouter() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={ControlSeguridad} />
          <Route exact path="/control" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
