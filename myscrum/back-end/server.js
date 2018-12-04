//express
const express = require('express');
const app = express();
// biblioteca SQLITE3

const cors = require('cors');
//diretorio "estático"
app.use(express.static('public'));
app.use(cors());

//PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//server
app.listen(4000, () => {
    console.log('Server started at http://localhost:4000/');
});