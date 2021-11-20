require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./error/errorHandler');
const AppError = require('./error/appError');
const morgan = require('morgan');

//getting all routes
const authRoutes = require('./routes/auth');

const app = express();

//setting up app middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello there, Welcome to guavar with an R',
  });
});

//setting up all routers
app.use('/auth', authRoutes);

//for invalid route
app.use((req, res, next) => {
  return next(new AppError('Specified route does no exist on this server', 404));
});

//error handler
app.use(errorHandler);

module.exports = app;
