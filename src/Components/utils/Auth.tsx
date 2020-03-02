import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin, useGoogleLogout } from './GoogleAuth';

type AuthContextValue = {
  token: string;
  loaded: boolean;
  signIn(): void;
  signOut(): void;
};

export const AuthContext = React.createContext<AuthContextValue>(
  (undefined as unknown) as AuthContextValue
);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FunctionComponent = props => {
  const navigate = useNavigate();
  const { children } = props;
  const [userObject, setUserObject] = useState();
  // @ts-ignore
  const token = userObject?.tokenId;

  const googleLoginCommon = {
    jsSrc: 'https://apis.google.com/js/api.js',
    clientId:
      '879980624044-tosaff245ucsg4ftse1ft9gndtsibk9d.apps.googleusercontent.com',
    scope: 'profile email https://www.googleapis.com/auth/calendar',
    accessType: 'online',
    cookiePolicy: 'single_host_origin',
    fetchBasicProfile: true,
    isSignedIn: true,
    uxMode: 'popup',
    onFailure: console.error,
  };

  // @ts-ignore
  const { signIn, loaded } = useGoogleLogin({
    ...googleLoginCommon,
    onSuccess: setUserObject,
  });

  // @ts-ignore
  const { signOut } = useGoogleLogout({
    ...googleLoginCommon,
    onLogoutSuccess: () => {
      setUserObject(undefined);
      navigate('/app/login');
    },
  });

  useEffect(() => {
    localStorage.setItem('jwt', token);
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      signIn,
      signOut,
      loaded,
    }),
    // eslint-disable-next-line
    [token, loaded, signIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
