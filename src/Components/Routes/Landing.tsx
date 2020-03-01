import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Landing = () => {
  return (
    <GoogleLogin
      onSuccess={e => console.log(e)}
      onFailure={e => console.log(e)}
      clientId='879980624044-tosaff245ucsg4ftse1ft9gndtsibk9d.apps.googleusercontent.com'
    />
  );
};

export { Landing };
