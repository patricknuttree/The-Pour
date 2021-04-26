const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

const { environment } = require('./config');
const isProduction = environment === 'production';

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if(!isProduction){
  app.use(cors());
}
app.use(helmet({
  contentSecurityPolicy:false
}));


app.use(routes);
//ROUTES







app.use(
  csurf({
    cookie:{
      secure:isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    }
  })
)
//PUT ROUTES ABOVE THIS LINE.
//ERROR HANDLING
  //Catch unhandled requests and forward to error handler. aka request not found 
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

  //Process sequelize Errors
app.use((err, _req, _res, next) => {
  if(err instanceof ValidationError){
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  };
  next(err)
});

//ERROR FORMATTER
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});
//DO NOT ADD ADDITIONAL ERROR HANDLERS BELOW THIS LINE. PUT THEM ABOVE ERROR FORMATTER. 









module.exports = app;