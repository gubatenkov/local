import mongoose from 'mongoose';

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  console.log(`Connection to MongoDB created: ${connect.connection.host}`);
};

export default connectDB;
