'use strict';

module.exports = function(app, sssss) {
  var sess = {
    secret: 'keyboard cat',
    key: "sessionId",
    resave: true,
    saveUninitialized: true,
    cookie: {
      domain: '.example.com',
      path: '/'
    }
  };

  app.use(sssss(sess));

  app.get('/', function(req, res) {
    res.send('Hello World');
  });
};