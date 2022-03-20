// The data for the server to pull from using the controller to connect with:


// IMPORTS: require mongoose 
const mongoose = require('mongoose');

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// SCHEMA TEMPLATE
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
});

// MODEL VARIABLE
const Bread = mongoose.model('Bread', breadSchema);


// EXPORTS:
module.exports = Bread
