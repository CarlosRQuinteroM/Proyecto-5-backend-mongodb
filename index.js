const express = require('express');
const db = require('./config/mongoose.js');
const app = express();
const port = 3000;


app.use(express.json());

db
.then(() => {
app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))