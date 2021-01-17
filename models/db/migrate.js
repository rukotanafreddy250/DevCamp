const { CREATE_TABLE_USERS, select_users } = require('../configs/queries');


const client = require('../configs/connect-db');

const migrateAllTables = async ( isDone) => {
    // await client.query({text:CREATE_TABLE_USERS}, (err, results) => {
    //     if(err) {
    //         console.log('error selecting table' + err.stack);
    //     }else{
    //         console.log(results.rows);
    //     }  
    // });
    await client.query({text: select_users}, (err, results) =>{
        if(err){
            console.log('err' + err.stack );
        }else{
            console.log(results.rows);
        } 
    })
    if(isDone) isDone();
    console.log('tables has been created successfully');
    console.log('DB connectd...');
    // process.exit(0);
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



