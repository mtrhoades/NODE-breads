// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config();
const app = express() // calling express function and turning into a variable to use below

// VARIABLES
const PORT = process.env.PORT; // ^ allows us to access the .env file
const MONGO_URI = process.env.MONGO_URI;

// DATABASE
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("connected to mongo: ", MONGO_URI);
});
  
// MIDDLEWARE - Used for between requests and responses
app.set('views', __dirname + '/views'); // used to show files from views folder (all the html)
app.set('view engine', 'jsx'); // setting the view engine in JSX.
app.engine('jsx', require('express-react-views').createEngine()); // ^ pulling from REACT 
app.use(express.static('public')); 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method')); // used to show files from views folder (all the html)
  
  
// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
});
  
// BREADS
const breadsController = require('./controllers/breads_controller.js'); // saving controllers_breads file to a variable.
app.use('/breads', breadsController); //  to use the breads file in controllers folder.

// BAKERS
const bakersController = require('./controllers/bakers_controller.js');
app.use('/bakers', bakersController);

// 404 PAGE
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
