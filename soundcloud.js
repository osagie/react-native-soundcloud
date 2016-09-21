try {
  var fetch = fetch || require('node-fetch');
} catch (error) {
  throw(new Error('If you are not using react native, please install the `node-fetch` dependency.'));
}

console.log(fetch);
