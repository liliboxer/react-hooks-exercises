import React, { useState, useContext, useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, 
    document.title, 
    window.location.pathname);
};

// creating the box to put our hooks in
export const Auth0Context = React.createContext();
// creating a new hook to use later
export const useAuth0 = () => useContext(Auth0Context);

export default function Auth0Provider({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, ...initOptions }) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  // client: connection to auth0
  const [auth0Client, setAuth0Client] = useState(true);
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async() => {
      // create auth client
      const auth0 = await createAuth0Client(initOptions);
      setAuth0Client(auth0);


      // if it includes, user has been redirected to sign in
      if(window.location.search.includes('code=')) {
        // stripping off code=
        const { appState } = await auth0.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      // check to see if user is sucessfully authenticated
      const isAuthenticated = await auth0.isAuthenticated();
      // set t/f
      updateIsAuthenticated(isAuthenticated);

      // if user sucessful, get all their info and set user state to user we go back
      if(isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      updateLoading(false);

    };
    initAuth0();
  }, []);

  // in a component, what gets returned will get rendered to the screen
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        auth0Client,
        loading
      }}>
      {children}
    </Auth0Context.Provider>
  );
}
