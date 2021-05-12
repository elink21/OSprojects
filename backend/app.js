const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use('/api/posts', (req, res, next) => {

  const posts = {
    id: '2231',
    title: 'Titulo',
    subtitle: 'Subtitle',
    content: 'content',
    gitURL: '',
    imageURL: 'https://images.unsplash.com/photo-1619641080402-73706588f4a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800',
  }

  res.status(200).json(posts);
  next();
})

module.exports = app;
