import React from 'react';
import { useAuth0 } from '../Auth0Provider';

export default function Header() {
  const { isAuthenticated, user, loading, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();

  return (
    <>
      <h1>Hello World</h1>
      {/* conditionally load login/log out pages */}
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </>
  );
}
