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

export let auth0 = null;

async function initializeAuth0Client() {
  const config = await fetchAuthConfig();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
    cacheLocation: 'localstorage',
  });
}

export async function getAuth0User() {
  let userInfo = undefined;

  if (auth0 && await auth0.isAuthenticated()) {
    userInfo = await auth0.getUser();
  }

  return userInfo;
}

// this will run when the page loads
export async function controllerInit() {
  await initializeAuth0Client();
}
