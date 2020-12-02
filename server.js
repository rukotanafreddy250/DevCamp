const express =  require("express");
const dotenv =  require("dotenv");

// route files
const bootcampRoutes = require('./routes/bootcamps');

const app = express();

dotenv.config( { path: './config/config.env' })

// mount files
app.use('/api/v1/bootcamps', bootcampRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running In ${process.env.NODE_ENV} Mode On Port ${process.env.PORT}`);
});