var express, url, app;

express = require('express');
url = require('url');
app = express();
app.listen(3000);

app.get('/clock', function(request, response) {
  var day, minutes, digitCorrection;
  day = new Date();
  minutes = day.getMinutes();
  digitCorrection = '';

  if (minutes < 10) {
    digitCorrection = '0';
  }
  response.set('Content-Type', 'text/html');
  response.send('<h2> The (army) time is ' + day.getHours() +
    ' :' + digitCorrection + minutes + '</h2>');
});

app.get('/:name', function(request, response) {
  response.json({msg: 'Hello, ' + request.params.name + '!'});
});
