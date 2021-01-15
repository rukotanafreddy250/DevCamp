const {Pool, Client} = require('pg');

// const connectDB = (() => {
    const client = new Client({
        user: 'RecipeDB',
        host: 'localhost',
        dadtabase: 'RecipeDB',
        password: '1234',
        port : ' 5432'
    });
    
    client.connect(
        (err, client, done) => {
            if(!err) {
                console.log('DB Connected...');
            }else{
                console.log(`DB Can't connect.. ${err.stack}`);
            }   
        }     
    )          
// })();    
            s
  
module.exports = client;     
// module.exports = connectDB;
   