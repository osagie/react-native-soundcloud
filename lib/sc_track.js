var request = require('./sc_request.js');

function Track(data, user) {
  Object.assign(this, data);
  if (user) { this.user = user; }
  if (!(this instanceof Track)) { return new Track(data); }
}

Track.prototype.test = function() {
  console.log('test track works', this);
}

module.exports = Track;
