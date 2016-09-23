var request = require('./lib/sc_request.js');
var User = require('./lib/sc_user.js');
var cache = null;

function Soundcloud(apiKey, options) {
  console.log('API KEY', apiKey);
  request.setApiKey(apiKey);
  this.shouldCache = false;
};

Soundcloud.prototype.getUserByName = function(username) {
  var shouldCache = this.shouldCache;
  if (shouldCache && users[username]) {
    return Promise.resolve(users[username]);
  }
  return request.resolve('https://soundcloud.com/' + username)
    .then(function(user) {
      if (user && user.id) {
        user = new User(user);
        if (shouldCache) { users[username] = user; }
        return user;
      } return Promise.reject(new Error('Failed to getUserByName for username: ' + username));
  });
}

Soundcloud.prototype.getTracks

module.exports = Soundcloud;
