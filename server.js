
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan');
const pg = require('pg');


const app = express()

//Allows you to set eviroment variable
require('dotenv').config()

// Morgan logs server requests in the terminal
app.use(morgan('short'))


//Connect Express Server to Postgress
const config = {
  user: 'postgres',
  database: 'users',
  password: 123456,
  port: 5432,
}
// Query postgress using pool
const pool = new pg.Pool(config);

app.use(express.static('public'));
// Extended true ->is a nested  
// Extended False ->not nested object
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());




app.get('/', (req, res) => {
  console.log('hello')
  res.send('<h1>Im responding</h1>')
})

// Sending Json object to page
app.get('/users', (req, res) => {
  const users = [
    {id: 1, firstName: 'Abdil',lastName: 'Ibrahim'},
    { id: 2, firstName: 'Stephan', lastName: 'Curry'},
    { id: 3, firstName: 'Keven', lastName: 'Durrant'},
    { id: 4, firstName: 'Klay', lastName: 'Thompson'},
    { id: 5, firstName: 'Draymond', lastName: 'Green'}
  ]
  res.send(users);
})


app


const port = process.env.PORT || 5006


app.listen(port, () => {
  console.log(`App Running on port ${process.env.PORT}`)
});

