const express = require('express'),
  app = express(),
  mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_ENDPOINT)
  .then(() => console.log('db connected !'))
  .catch(err => console.error(err));

app.listen(process.env.PORT, () => {console.log('server running')})