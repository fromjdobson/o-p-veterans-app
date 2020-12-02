import React, { useState } from "react";

export const AppStateContext = React.createContext();

export default function AppState({ children }) {
  const [appState, setAppState] = useState({
    isLoggedIn: false,
    isAdmin: false
   
  });
  return (
    <AppStateContext.Provider
      value={[appState, setAppState]}
    >
      {children}
    </AppStateContext.Provider>
  );
}
