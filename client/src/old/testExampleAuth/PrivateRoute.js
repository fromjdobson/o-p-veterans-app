import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { authContext } from './context'

export default function PrivateRoute({ children, ...rest }) {
  let auth = React.useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}