const express = require('express');

const port = 7889;
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () =>{
  console.log('App is working');
})