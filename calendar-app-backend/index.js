const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const { use } = require('./routes/auth');

const app = express();

// db connection
dbConnection();

// CORS
app.use(cors());

// middleware parseo body
// ? this parser is here before of other middlewares
app.use( express.json() );

// middleware routes
app.use('/api/auth', require('./routes/auth'))

app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Server runs in port ${ process.env.PORT }`)
});
