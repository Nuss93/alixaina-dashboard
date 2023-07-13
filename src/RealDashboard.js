import React from 'react';
import { Route, Switch } from "react-router-dom";
// import indexRoutes from "./routes.js";
import indexRoutes from "routesIndex.js";

// import firebase from 'firebase/app';
// import {inject, observer} from 'mobx-react'

class App extends React.Component{
  render(){
    return(
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route exact path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    )
  }
}

// App = inject('mobx_auth')(observer(App));
export default App;