const urls = [
  'https://kouleur-api.herokuapp.com/',
  'https://kouleur.herokuapp.com/',
  'https://nasa-apod-final.herokuapp.com/',
  'https://rich-mort.herokuapp.com/',
  'https://ttp-home-safe.herokuapp.com/'
];

export const wakeHerokuApps = () => {
  urls.forEach(url => fetch(url));
};
