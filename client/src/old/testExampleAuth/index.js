import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import ProvideAuth from './Auth/context'
import UserPage from './Pages/UserPage'
import UsersOnly from './Auth/UsersOnly'
import PublicPage from './Pages/PublicPage'
import Navbar from './Pages/components/Navbar'

export default function AuthExample() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/public"> <PublicPage /> </Route>
            <Route path="/login"> <LoginPage /> </Route>
            <UsersOnly path="/user"> <UserPage /> </UsersOnly>
          </Switch>
        </div>
      </BrowserRouter>
    </ProvideAuth>
  );
}














