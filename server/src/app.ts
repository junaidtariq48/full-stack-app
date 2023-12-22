import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import itemRoutes from './routes/itemRoutes';

const cors = require('cors');
const app = express();
const config = require('../config.js')

// Use cors middleware
app.use(cors());
app.options('*', cors());

const port = process.env.PORT || 3000;

// MongoDB connection
// mongoose.connect('mongodb+srv://junaidtariq48:GUzJzrFnbjBiecwj@bahrain-cluster.ku3xild.mongodb.net/?retryWrites=true&w=majority');

if(process.env.DB_URL && process.env.DB_NAME){
  mongoose.connect(process.env.DB_URL + process.env.DB_NAME);
} else {
  console.error("env variables not defined");
}

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// API Routes
app.use('/items', itemRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;