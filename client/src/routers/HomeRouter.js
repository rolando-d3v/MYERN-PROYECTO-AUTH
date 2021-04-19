import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";

export default function HomeRouter() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
