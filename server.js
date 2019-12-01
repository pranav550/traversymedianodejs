const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
//Loading env vars
dotenv.config({ path: './config/config.env' });

//connect the database
connectDB();

const app = express();

// app.use(logger);

// logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server is running ${process.env.NODE_ENV} on port no ${process.env.PORT}`
        .yellow.bold
    )
);

//Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // close server exit process
    server.close(() => process.exit(1));
});