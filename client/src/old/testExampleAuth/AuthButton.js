import React from 'react'
import { useHistory } from "react-router-dom";
import { authContext } from './context'

export default function AuthButton() {
    let history = useHistory();
    let auth = React.useContext(authContext)
  
    return auth.user ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }