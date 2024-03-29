import * as auth from './controllers/authController.mjs';
import * as customer from './controllers/customerController.mjs';

let isAuthenticated;

async function updateAuthUI() {
  isAuthenticated = await auth.auth0.isAuthenticated();

  document.getElementById('login').disabled = isAuthenticated;
  document.getElementById('logout').disabled = !isAuthenticated;
}

if (isAuthenticated) {
  const user = await auth0.getUser();
}

export async function login() {
  try {
    await auth.auth0.loginWithPopup();
  } catch (error) {
    console.error(error);
    return;
  }
  let userData = await auth.getAuth0User();

  customer.postCustomer(userData.sub);

  isAuthenticated = true;
}

export async function logout() {
  await auth.auth0.logout({
    returnTo: window.location.origin,
  });
}

async function handleAuth0Redirect() {
  isAuthenticated = await auth.auth0.isAuthenticated();

  if (isAuthenticated) return;

  const query = window.location.search;
  if (query.includes('state=')) {
    try {
      // process the login state
      await auth.auth0.handleRedirectCallback();
    } catch (e) {
      window.alert(e.message || 'authentication error, sorry');
      logout();
    }

    // remove the query parameters
    window.history.replaceState({}, document.title, '/');

    await updateAuthUI();
  }
}

async function renderInit() {
  await auth.controllerInit();
  await updateAuthUI();
  await handleAuth0Redirect();
}

window.addEventListener('load', renderInit);
