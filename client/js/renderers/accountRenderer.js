import * as auth from '../auth.js'

document.querySelector('#login').addEventListener('click', auth.login);
document.querySelector('#logout').addEventListener('click', auth.logout);