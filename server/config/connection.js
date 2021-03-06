// import mongoose
const mongoose = require('mongoose');

// create the database using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0/handycart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export the mongoose connection
module.exports = mongoose.connection;