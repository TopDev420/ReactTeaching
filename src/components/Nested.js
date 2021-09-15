import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./custom.scss";

const Nested = () => {
  let match = useRouteMatch();
  return (
    <div className="nested">
      <div className="side-left">
        <ul>
          <li>
            <Link to={`${match.url}/It is the nested Routing`}>nested</Link>
          </li>
          <li>
            <Link to={`${match.url}/My name is John William`}>name</Link>
          </li>
        </ul>
      </div>
      <div className="side-right">
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

function Topic() {
  let { topicId } = useParams();
  return <h4>{topicId}</h4>;
}

export default Nested;
