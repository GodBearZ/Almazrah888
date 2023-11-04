const mongoose = require('mongoose');

const connectDB = async() => {
    mongoose.connect('mongodb+srv://AQ:aq1243@almazrah01.bdpzuuc.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // ไม่ต้องใช้ useFindAndModify และ useCreateIndex
      }).then(() => {
        console.log('Connected to Almazrah888 MongoDB');
      }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
      });
      
}

module.exports = connectDB