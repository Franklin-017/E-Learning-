const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./config/db');

dotenv.config({ path: './config/.env' });
//Initialize express
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/signin', require('./routes/signin'));

//Database Connect
connectdb();

//Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
