const express =  require("express");
const dotenv =  require("dotenv");
const morgan = require('morgan');
// route files
const bootcampRoutes = require('./routes/bootcamps');


const app = express();

//Dev logging Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


dotenv.config( { path: './config/config.env' })

// connect to DB
const connectDB = require('./models/configs/connect-db');

// table migration
const migration = require('./models/db/migrate');



// mount files
app.use('/api/v1/bootcamps', bootcampRoutes);

// connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running In ${process.env.NODE_ENV} Mode On Port ${process.env.PORT}`);
});











