const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT ?? 3001; // nullish operator
const app = express();
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { addToLocals } = require('./src/middlewares/addToLocals');
const {checkUser, checkCompany} = require('./src/middlewares/check')

const indexRout = require('./src/routes/index_Rout');
const authorization = require('./src/routes/authorization_Rout');
const registration = require('./src/routes/registration_Rout');
const add_instance =require('./src/routes/add_instance_Rout');
const deleteCompPost = require('./src/routes/deleteCompPost_Rout');
const edit_CompPost = require('./src/routes/edit_CompPost_Rout');
const add_coctail = require('./src/routes/add_coctail_Rout')

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(process.env.PWD, 'src', 'views'));
app.set('view engine', 'hbs');

// hbs.registerHelper('checkBartender', function (userRoll) { 
//   if (userRoll === 'artender') {
//     return true
//   } 
//   return false
// });
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.env.PWD, '/src/public')));

// конфигурации сессиии
const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false, // в жизни обычно ставиться фолс что бы не сохранять пустую сессию
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig));

// app.use((req, res, next) => {
//   res.locals.userId = req.session?.userId;
//   res.locals.userEmail = req.session?.userEmail;
//   next();
// });

app.use(morgan('dev'));

// переадресация на роутер
app.use(addToLocals)
app.use('/', indexRout);
app.use('/authorization', authorization);
app.use('/registration', registration);
app.use('/add_instance', checkCompany, add_instance);
app.use('/deleteCompPost', deleteCompPost);
app.use('/edit_CompPost', edit_CompPost);
app.use('/add_coctail',checkUser, add_coctail);

app.listen(PORT, () => {
  console.log(`Порт ${PORT} работает`);
});
