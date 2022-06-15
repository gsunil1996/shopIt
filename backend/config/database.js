const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(connected => console.log(`MongoDB Database connected with Host: ${connected.connection.host}`))
}

module.exports = connectDatabase;