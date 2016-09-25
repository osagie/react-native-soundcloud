var request = require('request-promise-native');
var querystring = require('querystring');

var SOUNDCLOUD_CLIENT_ID = null;
var SOUNDCLOUD_API_URL = 'https://api.soundcloud.com/';

function setApiKey(key) {
  SOUNDCLOUD_CLIENT_ID = key;
}

function stripLeadingSlash(string) {
  while (string.substring(0, 1) === '/') {
    string = string.substring(1);
  } return string;
}

function buildQuerystring(params) {
  params = Object.assign(params || {}, {
    client_id: SOUNDCLOUD_CLIENT_ID
  });
  return querystring.stringify(params);
}

function get(endpoint, params) {
  var url = 'https://api.soundcloud.com/' + stripLeadingSlash(endpoint) + '?' + buildQuerystring(params || {});
  console.log('url to fetch', url);
  return request(url)
    .then((response) => {
      return JSON.parse(response);
    });
}

function resolve(url) {
  return get('/resolve', { url: url });
}

function request(method, endpoint, body) {

}

module.exports = {
  setApiKey: setApiKey,
  get: get,
  resolve: resolve
};
