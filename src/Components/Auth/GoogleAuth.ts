// @ts-ignore
import { gapi } from 'gapi-script';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';

interface IAuthResponse {
  readonly access_token: string;
  readonly id_token: string;
  readonly login_hint: string;
  readonly scope: string;
  readonly expires_in: number;
  readonly first_issued_at: number;
  readonly expires_at: number;
}

interface IBasicProfile {
  getId(): string;
  getEmail(): string;
  getName(): string;
  getGivenName(): string;
  getFamilyName(): string;
  getImageUrl(): string;
}

export interface IProfile {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
}

// Based on https://developers.google.com/identity/sign-in/web/reference
export interface IGoogleLoginResponse {
  // google-login.js sez: offer renamed response keys to names that match use
  googleId: string;
  tokenObj: IAuthResponse;
  tokenId: string;
  accessToken: string;
  profileObj: IProfile;
  getBasicProfile(): IBasicProfile;
  getAuthResponse(): IAuthResponse;
  reloadAuthResponse(): Promise<IAuthResponse>;
  getGrantedScopes(): string;
  getHostedDomain(): string;
  getId(): string;
  isSignedIn(): boolean;
  hasGrantedScopes(scopes: string): boolean;
  disconnect(): void;
  grantOfflineAccess(options: IGrantOfflineAccessOptions): Promise<IGoogleLoginResponseOffline>;
  signIn(options: ISignInOptions): Promise<any>;
  grant(options: ISignInOptions): Promise<any>;
}

interface IGrantOfflineAccessOptions {
  readonly scope?: string;
  readonly redirect_uri?: string;
}

interface ISignInOptions {
  readonly scope?: string;
  readonly app_package_name?: string;
  readonly fetch_basic_profile?: boolean;
  readonly prompt?: string;
}

export interface IGoogleLoginResponseOffline {
  readonly code: string;
}

interface IGoogleLoginProps {
  readonly clientId: string,
  readonly jsSrc?: string,
  readonly buttonText?: string,
  readonly scope?: string,
  readonly className?: string,
  readonly redirectUri?: string,
  readonly cookiePolicy?: string,
  readonly loginHint?: string,
  readonly hostedDomain?: string,
  readonly prompt?: string,
  readonly responseType?: string,
  readonly children?: ReactNode,
  readonly style?: CSSProperties,
  readonly icon?: boolean,
  readonly theme?: "light" | "dark",
  readonly tag?: string,
  readonly disabled?: boolean;
  readonly autoLoad?: boolean;
  readonly uxMode?: string;
  readonly disabledStyle?: CSSProperties;
  readonly fetchBasicProfile?: boolean;
  readonly isSignedIn?: boolean;
  readonly type?: string;
  readonly accessType?: string;
  discoveryDocs?: any;
  onSuccess(res?: any): void;
  onFailure(error: any): void;
  onRequest?(): void;
  render?(props: { disabled?: boolean; onClick(): void; }): JSX.Element;
}

interface IGoogleLogoutProps {
  readonly scope?: string,
  readonly redirectUri?: string,
  readonly cookiePolicy?: string,
  readonly loginHint?: string,
  readonly hostedDomain?: string,
  readonly prompt?: string,
  readonly responseType?: string,
  readonly icon?: boolean,
  readonly theme?: "light" | "dark",
  readonly autoLoad?: boolean;
  readonly uxMode?: string;
  readonly fetchBasicProfile?: boolean;
  readonly isSignedIn?: boolean;
  readonly type?: string;
  readonly accessType?: string;
  readonly clientId: string,
  readonly buttonText?: string;
  readonly className?: string;
  readonly children?: ReactNode;
  readonly jsSrc?: string;
  readonly style?: CSSProperties;
  readonly disabled?: boolean;
  readonly disabledStyle?: CSSProperties;
  readonly tag?: string;
  discoveryDocs?: any;
  onLogoutSuccess?(): void;
  onFailure?(): void;
  render?(props: { disabled?: boolean; onClick(): void; }): JSX.Element;
}

const useGoogleLogin = ({
  onSuccess,
  clientId,
  cookiePolicy,
  loginHint,
  hostedDomain,
  autoLoad,
  isSignedIn,
  fetchBasicProfile,
  redirectUri,
  discoveryDocs,
  onFailure,
  uxMode,
  scope,
  accessType,
  responseType,
  prompt,
}: IGoogleLoginProps) => {
  const [loaded, setLoaded] = useState(false);

  function handleSigninSuccess(res: IGoogleLoginResponse) {
    /*
      offer renamed response keys to names that match use
    */
    const basicProfile = res.getBasicProfile();
    const authResponse = res.getAuthResponse();
    res.googleId = basicProfile.getId();
    res.tokenObj = authResponse;
    res.tokenId = authResponse.id_token;
    res.accessToken = authResponse.access_token;
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName(),
    };
    onSuccess(res);
  }

  function signIn(e?: any) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }
    if (loaded) {
      const auth2 = gapi.auth2.getAuthInstance();
      const options = {
        prompt,
      };
      if (responseType === 'code') {
        auth2.grantOfflineAccess(options).then(onSuccess, onFailure);
      } else {
        auth2.signIn(options).then(handleSigninSuccess, onFailure);
      }
    }
  }

  useEffect(() => {
    const params = {
      client_id: clientId,
      cookie_policy: cookiePolicy,
      login_hint: loginHint,
      hosted_domain: hostedDomain,
      fetch_basic_profile: fetchBasicProfile,
      discoveryDocs,
      ux_mode: uxMode,
      redirect_uri: redirectUri,
      scope,
      access_type: accessType,
    };

    if (responseType === 'code') {
      params.access_type = 'offline';
    }

    gapi.load('auth2', () => {
      setLoaded(true);
      if (!gapi.auth2.getAuthInstance()) {
        gapi.auth2.init(params).then((res: any) => {
          if (isSignedIn && res.isSignedIn.get()) {
            handleSigninSuccess(res.currentUser.get());
          }
        }, onFailure);
      }
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (autoLoad) {
      signIn();
    }
    // eslint-disable-next-line
  }, [loaded]);

  return { signIn, loaded };
};

const useGoogleLogout = ({
  jsSrc,
  onFailure,
  clientId,
  cookiePolicy,
  loginHint,
  hostedDomain,
  fetchBasicProfile,
  discoveryDocs,
  uxMode,
  redirectUri,
  scope,
  accessType,
  onLogoutSuccess,
}: IGoogleLogoutProps) => {
  const [loaded, setLoaded] = useState(false);

  const signOut = () => {
    if (gapi) {
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2 !== undefined) {
        auth2.signOut().then(auth2.disconnect().then(onLogoutSuccess));
      }
    }
  };

  useEffect(() => {
    const params = {
      client_id: clientId,
      cookie_policy: cookiePolicy,
      login_hint: loginHint,
      hosted_domain: hostedDomain,
      fetch_basic_profile: fetchBasicProfile,
      discoveryDocs,
      ux_mode: uxMode,
      redirect_uri: redirectUri,
      scope,
      access_type: accessType,
    };
    gapi.load('auth2', () => {
      setLoaded(true);
      if (!gapi.auth2.getAuthInstance()) {
        gapi.auth2.init(params).then(() => { ; }, onFailure);
      }
    });
    // eslint-disable-next-line
  }, []);

  return { signOut, loaded };
};

export { useGoogleLogin, useGoogleLogout };

