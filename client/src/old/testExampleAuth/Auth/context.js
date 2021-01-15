import React from 'react'
import { useState } from 'react';
import { authFunctions } from './fakeAuth'

export const authContext = React.createContext();

export default function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const auth = {
    user,
    signin: cb => {
      return authFunctions.signin(() => {
        setUser("user");
        cb();
      });
    },
    signout: cb => {
      return authFunctions.signout(() => {
        setUser(null);
        cb();
      });
    }
  }
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
