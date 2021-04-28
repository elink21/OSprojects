const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  const response = {
    name: 'elias',
    surname: 'segundo'
  }
  res.send(response);
})

module.exports = app;
