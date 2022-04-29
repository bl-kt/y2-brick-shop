// Credit to Jack for the following:
// https://github.com/portsoc/auth0-example

async function fetchAuthConfig() {
  const response = await fetch('/api/auth/config');
  if (response.ok) {
    return response.json();
  } else {
    throw response;
  }
}

let auth0 = null;

async function initializeAuth0Client() {
  const config = await fetchAuthConfig();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
  });
}

// this will run when the page loads
async function init() {
  await initializeAuth0Client();
  console.log('auth0 initialized');
  console.log({ auth0 });
}

window.addEventListener('load', init);

export { auth0, init };
