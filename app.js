const express = require('express');
const app = express();

const userRouter = require('./src/routes/users');

app.use('/user', userRouter);


app.listen(3000, () => console.log('Servidor corriendo el puerto 3000'));

