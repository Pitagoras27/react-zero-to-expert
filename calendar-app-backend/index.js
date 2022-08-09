const express = require('express');
require('dotenv').config();

const app = express();

// app.get('/', (req, res) => {
//   res.json({
//     ok: true
//   });
// });

app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Server runs in port ${ process.env.PORT }`)
})