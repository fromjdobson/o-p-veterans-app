import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { authContext } from './context'

// This is a reusable component is needed for EVERY component that requires a user to be logged in (authenticated)
// Use it like this:
// <UsersOnly path='/user'> <MyUserPage/> </UsersOnly>

export default function RouteUsersOnly({ children, ...rest }) {
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
