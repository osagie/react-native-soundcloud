var request = require('./sc_request.js');
var Track = require('./sc_track.js');
var cache = new require('tinycache').shared;
var DEFAULT_CACHE_TIME = 1000 * 60 * 60;

function User(data) {
  Object.assign(this, data);
  if (!(this instanceof User)) { return new User(data); }
}

User.prototype.getTracks = function() {
  var user = this;
  var cacheKey = user.id + '/tracks';
  if (cache.get(cacheKey)) { return cache.get(cacheKey); }
  return request.get('/users/' + user.id + '/tracks').then(function(tracks) {
    tracks = tracks.map(function(track) {
      return new Track(track, user);
    });
    cache.put(cacheKey, tracks, DEFAULT_CACHE_TIME);
    return tracks;
  });
}

User.prototype.strng = function() {
  return 'stringy';
}

module.exports = User;
