const PORT = 6060;
var express = require('express');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const dotenv = require('dotenv');
var createError = require('http-errors');

//route
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const serviceRouter = require('./routes/service/service_route');
const rdRouter = require('./routes/r&d/r&d_route');
const aboutRouter = require('./routes/about/about_route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  secret: 'process.env.COOKIE_SECRET',
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      secure: false,
  },
  // store:new MySQLStore({
  //     host     : 'localhost',
  //     port: '8081',
  //     user     : 'root',
  //     password : 'Rlgus715!@',
  //     database : 'AIP'//'SPR'
  //   })
}));

// app.use(passport.initialize());
// app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

//paging
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/service', serviceRouter);
app.use('/r&d', rdRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use((req, res, next)  => {
  const error = new Error(`${req.method} ${req.url} no router`);
  next(createError(404));
  next(error);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.render('error');
  console.log("error:"+err);
  console.log("catch error:"+err.message);
  res.status(500).json({
    message: err.message
  });
});

app.listen(PORT, function(){
  console.log(`CONNECTED PORT ${PORT}`);
  });

// module.exports = app;
