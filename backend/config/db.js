import mongoose from 'mongoose';
import color from 'colors';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_PROD, {
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected on : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;



