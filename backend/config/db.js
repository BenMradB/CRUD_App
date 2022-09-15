require('dotenv').config();
const mongoose = require('mongoose');

const DB_URI = process.env.DATABASE_URI.replace('<password>', process.env.DATABASE_PASSWORD);

module.exports.getConnection = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`App Connected To The DataBase ... `);
    } catch (err) {
        console.log(err);
        process.exit();
    }
};