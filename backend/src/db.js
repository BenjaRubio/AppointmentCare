// import config from '@config/config';
import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.log(`MongoDB connection error: ${err.message}`);
    throw new Error(err.message);
  }
};

export default { connect };