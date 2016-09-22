var request = require('./lib/sc_request.js');
var cache = null;

function Soundcloud(apiKey) {
  console.log('API KEY', apiKey);
  request.setApiKey(apiKey);
};

Soundcloud.prototype.getUserByName = function(username) {
  if (shouldCache && users[username]) {
    return Promise.resolve(users[username]);
  }
  var url = 'https://soundcloud.com/' + username;
  return request.resolve(url)
    .then((user) => {
      console.log('user', user);
      if (user && user.id) {
        if (shouldCache) { users[username] = user; }
        return Promise.resolve(user);
      } return Promise.reject(new Error('Failed to getUserByName for username: ' + username));
  });
}

var sc = new Soundcloud('350d81025db4e94e858da4e03c2e22e8');
sc.getUserByName('hbkdaghe').then(function(response) {
  console.log(response);
});

module.exports = Soundcloud;
