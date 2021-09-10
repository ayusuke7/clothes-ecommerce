import { Redirect, Route, Switch } from "react-router-dom";
import routes, { HOME_PAGE } from "./routes";

export default function AppRoutes() {
  return (
    <Switch>
      <Redirect from="/" to={HOME_PAGE} exact />
      {routes.map((route, i) => (
        <Route key={`route-${i + 1}`} {...route} />
      ))}
    </Switch>
  );
}
