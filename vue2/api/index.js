const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  if (req.query.url) {
      var url = req.query.url;
      fetch({url, method: 'GET'}).then((err, res) => {
          res.json(res);
      }).catch(err => {
          res.end('出错了:'+JSON.stringify(err));
      });

  } else {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`404 Not Found<br/><hr/>Nginx1.2`);
  }
  
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;