import { UserManager } from 'oidc-client';

new UserManager().signinPopupCallback(window.location.href);
