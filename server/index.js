const express = require('express');
const app = express();
const accountRouter = require('./routes/account');

require('../config/database');

app.use(express.json());
app.use('/user', accountRouter);

app.listen(3001, () => {
    console.log(`Listening on 3001`);
});