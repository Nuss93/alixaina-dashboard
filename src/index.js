import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.css";
import "assets/css/nasreen.css";

import PrivateRoute from './PrivateRoute.js';
import RealDashboard from './RealDashboard.js';

// import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

import firebase from 'firebase/app';
// import {CONFIG} from './config.js'
import {FIREBASE_API} from './value.js';
import { createHashHistory } from 'history';
const history = createHashHistory();

firebase.initializeApp(FIREBASE_API);

class Checker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
    };
  }
  
  componentWillMount() {
    console.log(this.state.authenticated);
    // if(this.state.authenticated === true) {      
    //   // history.push("/admin")
    // }
    // if(this.state.authenticated === false) {
    //   // history.push("/auth/login")
    // }
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.props.mobx_config.setCONFIG(CONFIG)
    //     console.log('configuration MOBX', this.props.mobx_config.config);

    //     this.props.mobx_auth.setFUID(user.uid);
    //     sessionStorage.setItem("unique_id", user.uid);
    //     console.log(this.props.mobx_auth.FUID);
    //     console.log(user.uid);
    //     this.setState({
    //       authenticated: true,
    //       currentUser: user,
    //       loading: false
    //     });
    //   } else {
    //     this.setState({
    //       authenticated: false,
    //       currentUser: null,
    //       loading: false
    //     });
    //   }
    // });
  }
  render() {
    const { authenticated } = this.state;    
    return (
      <HashRouter>
        <Switch>
          <Route path="/auth/login" render={props => <AuthLayout {...props} />} />
          <PrivateRoute path="/" component={RealDashboard} authenticated={authenticated}/>
          
          {/* <Route path="/admin" render={props => <AdminLayout {...props} />} /> */}
          {/* <Route path="/auth" render={props => <AuthLayout {...props} />} /> */}
          {/* {
            authenticated === true ?
            <Redirect from="*" to="/admin/index" /> :
            <Redirect from="*" to="/auth/login" />
          } */}
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <Checker/>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider {...stores}>
//     <Checker/>
//   </Provider>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={props => <AdminLayout {...props} />} />
//       <Route path="/auth" render={props => <AuthLayout {...props} />} />
//       <Redirect from="/" to="/admin/index" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
