import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/oidc-callback`,
  response_type: 'token id_token',
  scope: process.env.REACT_APP_SCOPE,
  authority: process.env.REACT_APP_AUTHORITY_URL,
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  popup_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}/popup.html`,
  post_logout_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
