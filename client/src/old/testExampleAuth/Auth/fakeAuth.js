// this is fake authentication. replace signin and signout functions with logic from firebase response.

export const authFunctions = {
    isAuthenticated: false,
    signin(cb) {
      authFunctions.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      authFunctions.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  