require('dotenv').config();
const app = require('./app');
const dbConnection = require('./config/db');

const PORT = process.env.PORT || 3000;

dbConnection.getConnection();

app.listen(PORT, () => console.log(`App Listening For Requests On Port ${PORT}`));