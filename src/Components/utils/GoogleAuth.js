import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';

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
  jsSrc,
  prompt,
}) => {
  const [loaded, setLoaded] = useState(false);

  function handleSigninSuccess(res) {
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

  function signIn(e) {
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
        gapi.auth2.init(params).then(res => {
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
}) => {
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
        gapi.auth2.init(params).then(() => {}, onFailure);
      }
    });
    // eslint-disable-next-line
  }, []);

  return { signOut, loaded };
};

export { useGoogleLogin, useGoogleLogout };
