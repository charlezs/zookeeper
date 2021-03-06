const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const req = require('express/lib/request');
const {animals} = require('./data/animals.json')
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express()

app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({ extended: true}))
//pare incoming JSON data
app.use(express.json())

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
  
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
