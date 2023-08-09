   /* Replace <password> with your database password */
 
  const mongoose = require('mongoose');
  const config = require('config');
  // const db = config.get('mongoURI');
  const db = "mongodb+srv://shalvink42:Genesis988@cluster0.lwphzxt.mongodb.net/?retryWrites=true&w=majority";
  
  const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(db, {
        useNewUrlParser: true,
      });
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;