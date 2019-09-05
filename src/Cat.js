import React from 'react';
import { useAuth0 } from './Auth0Provider';

export default function Cat() {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <h1>{isAuthenticated && !loading ? user.nickname : 'unknown'} is the Owner</h1>
      <p>Max</p>
      <p>8 years old</p>
      <p>12 lbs</p>
    </>
  );
}
