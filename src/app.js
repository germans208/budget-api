const express = require('express');
const app = express();

const userRouter = require('./routes/users');
const transactionRouter = require('./routes/transactions');

app.use('/users', userRouter);
app.use('/transactions', transactionRouter);

app.listen(3000, () => console.log('Servidor corriendo el puerto 3000'));

