const express = require('express')();
let app = express;

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  const { name = 'Anonymus' } = req.cookies;
  res.send(`Hey there ${name}`);
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'stevie wonder');
  res.cookie('animal', 'harlequin shrimp');
  res.send('OK sent you a cookie');
});

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true });
  res.send('Signed your cookie');
});

app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log('SERVING');
});
