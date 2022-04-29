import * as auth from '../controllers/authController.mjs';

document.querySelector('#login').addEventListener('click', login);
document.querySelector('#logout').addEventListener('click', logout);

async function updateAuthUI() {
  const isAuthenticated = await auth.auth0.isAuthenticated();

  document.getElementById('login').disabled = isAuthenticated;
  document.getElementById('logout').disabled = !isAuthenticated;
}

async function login() {
  await auth.auth0.loginWithRedirect({
    redirect_uri: window.location.origin,
  });
}

function logout() {
  auth.auth0.logout({
    returnTo: window.location.origin,
  });
}

async function handleAuth0Redirect() {
  const isAuthenticated = await auth.auth0.isAuthenticated();

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

async function init() {
  await updateAuthUI();
  await handleAuth0Redirect();
}

window.addEventListener('load', init);
