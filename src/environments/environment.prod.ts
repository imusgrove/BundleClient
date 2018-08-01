export const environment = {
  production: true
};

export let APIURL = ""
// export let APIURL = '//localhost:3000';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'icd-bundleclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://icd-bundleapi.herokuapp.com/'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
}