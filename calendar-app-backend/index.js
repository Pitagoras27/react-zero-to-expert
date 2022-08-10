const express = require('express');
require('dotenv').config();

const app = express();

// middleware parseo body
// ? this parser is here before of other middlewares
app.use( express.json() );

// middleware routes
app.use('/api/auth', require('./routes/auth'))

app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Server runs in port ${ process.env.PORT }`)
});
