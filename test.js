var Soundcloud = require('./soundcloud.js');
const sc = new Soundcloud('350d81025db4e94e858da4e03c2e22e8');
sc.getUserByName('hbkdaghe').then(function(user) {
  console.log('hbkdaghe Full Name: ' + user.full_name);
  return user.getTracks().then(function(tracks) {
    console.log('tracks', tracks);
  });
}).catch(function(error) {
  console.error(error, error.stack);
});
