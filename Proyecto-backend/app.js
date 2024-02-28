const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function main(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    console.log('conectado a MongoloDB')
}

main().catch(console.error)

app.use('/api/signup', require('./rutas/signup'))
app.use('/api/login', require('./rutas/login'))
app.use('/api/usuario', require('./rutas/usuario'))
app.use('/api/todos', require('./rutas/todos'))
app.use('/api/refreshToken', require('./rutas/refreshToken'))
app.use('/api/signout', require('./rutas/signout'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Servidor corriendo en: ${port}`)
})