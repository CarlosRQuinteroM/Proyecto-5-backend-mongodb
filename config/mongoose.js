const mongoose = require('mongoose');
const QUERY_STRING = "mongodb+srv://reservas:reservas@reservas.ih0fj.mongodb.net/reservasDB?retryWrites=true&w=majority";

// Connection to DB
const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Conectado a la base de datos'))
.catch((error) => console.log(error));

//Test 1
//Tes 2


module.exports = db;

