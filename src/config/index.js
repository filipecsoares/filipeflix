const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://filipeflix.herokuapp.com';

export default {
  URL_BACKEND,
};
