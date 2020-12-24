const { CREATE_TABLE_USERS} = require('../configs/queries');

// const {client} = require('../configs/connect-db');
const connectDB = require('../configs/connect-db');
const client = require('../configs/connect-db');

const migrateAllTables = async ( isDone) => {
    await client.query({text:CREATE_TABLE_USERS}, (err, results) => {
        if(err) {
            console.log('error selecting table' + err.stack);
        }else{
            console.log(results.rows);
        }
    });
    if(isDone) isDone();
    console.log('table created successfully');
    process.exit(0);
}

try{
    (
        async () => {
            migrateAllTables();
        }
    )();

}catch(err){
    console.log(err);
}