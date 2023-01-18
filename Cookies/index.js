const express = require('express')();
let app = express;

app.get('/greet', (req, res) => {
  res.send('Hey there');
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'stevie wonder');
  res.cookie('animal', 'harlequin shrimp');
  res.send('OK sent you a cookie');
});

app.listen(3000, () => {
  console.log('SERVING');
});
