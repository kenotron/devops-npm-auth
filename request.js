const fetch = require('node-fetch').default;
const qs = require('querystring');

module.exports = {
  post(url, options, cb) {
    fetch(`${url}?${qs.stringify(options.qs)}`, {
      method: 'post'
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        cb(null, {}, json);
      })
      .catch(e => {
        cb(e.message);
      });
  }
};
