var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const knex = require('knex');

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '8481374',
    database: 'books'
  }
})

var app = express();

app.listen(3001, () => {
  console.log("app listen on 3001")
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/books', async (req, res) => {
  try {
    const books = await database.select().from('books');
    console.log('All books:', books);
    res.status(200).send(books)
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.send(`Error retrieving books: ${error}`, 400);
  }
});


app.patch('/books', async (req, res) => {
  const newBook = req.body;
  try {
    await database('books').insert(newBook);
    console.log('Book added successfully');
    const books = await database.select().from('books');
    res.status(200).send(books);
  }
catch(error) {
    console.error('Error adding book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.delete('/books/:id', async (req, res) => {
  const bookIdToDelete = req.params.id;

  try {
    const rowsAffected = await database('books')
      .where('id', bookIdToDelete)
      .del();

    if (rowsAffected > 0) {
      res.status(200).json({ message: `Book with ID ${bookIdToDelete} deleted successfully` });
    } else {
      res.status(404).json({ error: `Book with ID ${bookIdToDelete} not found` });
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
