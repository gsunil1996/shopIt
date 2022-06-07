const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(connected => console.log(`MongoDB Database connected with Host: ${connected.connection.host}`))
}

module.exports = connectDatabase;


// create config.env file in config folder and paster the below code in that file.

// PORT = 4000
// NODE_ENV = DEVELOPMENT
// DB_LOCAL_URI = mongodb://localhost:27017/shopit
// JWT_SECRET = DJLKSOIJFKSERJ4198+9859684DSFFEW654987FS
// JWT_EXPIRES_TIME = 7d
// COOKIE_EXPIRES_TIME = 7

// SMTP_HOST = smtp.mailtrap.io
// SMTP_PORT = 2525
// SMTP_EMAIL = 4935fdc8417a6c
// SMTP_PASSWORD = cf352b4adebdd3
// SMTP_FROM_EMAIL = noreply@shopit.com
// SMTP_FROM_NAME = shopit