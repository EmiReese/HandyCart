// import mongoose
const mongoose = require('mongoose');

// create the database using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/handycart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// export the mongoose connection
module.exports = mongoose.connection;