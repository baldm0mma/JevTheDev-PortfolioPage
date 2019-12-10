const urls = [
  // 'https://cors-anywhere.herokuapp.com/https://kouleur-api.herokuapp.com/',
  'https://cors-anywhere.herokuapp.com/https://kouleur.herokuapp.com/',
  'https://cors-anywhere.herokuapp.com/https://nasa-apod-final.herokuapp.com/',
  'https://cors-anywhere.herokuapp.com/https://rich-mort.herokuapp.com/',
  'https://cors-anywhere.herokuapp.com/https://ttp-home-safe.herokuapp.com/'
];

export const wakeHerokuApps = () => {
  urls.forEach(url => fetch(url));
};
