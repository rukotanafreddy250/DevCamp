const CREATE_TABLE_USERS = `
    DROP TABLE IF EXISTS test_users CASCADE;
    CREATE TABLE IF NOT EXISTS test_users (
        id SERIAL PRIMARY KEY,
        fname VARCHAR(255),
        lname VARCHAR(255),
        address VARCHAR(255),
        phonenumber VARCHAR(255),   
        email VARCHAR(255),
        isadmin BOOLEAN
    );
`;

module.exports = CREATE_TABLE_USERS;


const select_users = `   
        select * from jot_users;
`;
module.exports = select_users;