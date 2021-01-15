import React from 'react'
import useProvideAuth from './useProvideAuth'

export const authContext = React.createContext();

export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }