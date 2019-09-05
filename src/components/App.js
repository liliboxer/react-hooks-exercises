import React from 'react';
import { useAuth0 } from '../Auth0Provider';

export default function App() {
  // destructure this hook
  const { isAuthenticated, user, loading, auth0Client } = useAuth0();
  if(!loading && !isAuthenticated) {
    auth0Client.loginWithRedirect();
  } 

  // alt to lines 15-17 to login 
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();

  // makes it so the page won't load pre auth page
  // if(!isAuthenticated) {
  //   return null;
  // }
  return (
    <>
      <h1>Hello World</h1>
      {/* conditionally load login/log out pages */}
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </>
  );
}
  
