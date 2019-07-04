import React from "react";
import { Route, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {  
  return (
    <div>
      <Route
        {...rest}
        render={props =>
          authenticated === true ? (
            // <Component {...props} {...rest} />
            <AdminLayout {...props} {...rest} />
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      />
      {/* {
        authenticated === true ? (
          <Redirect from="/" to="/admin/index" />
        ) : null
      } */}
    </div>
  );
}