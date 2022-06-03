const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(connected => console.log(`MongoDB Database connected with Host: ${connected.connection.host}`))
}

module.exports = connectDatabase;