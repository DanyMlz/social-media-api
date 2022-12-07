const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const connectionMongoDB = require('./database/connectionMongoDB');
const authRouter = require('./routes/AuthRouter');

const app = express();
connectionMongoDB()


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

app.use('/auth', authRouter)