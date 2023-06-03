const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://tenga123:tenga123@cluster0.iccyped.mongodb.net/mgmt_db?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, })
        console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(error)
        process.exit(1);   
    }
}

module.exports = connectDB;