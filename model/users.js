const db = require("../database_Connection/config");

class users {
    constructor(id,userName,password,name) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.name = name;

    
    }
     
        static async findAll() {
    
            
            let sql = "SELECT * FROM users";
            
            let results = (await db.query(sql));
            // console.log(await db.query(sql))
            return results;
        }
        static async findUser(userName,password) {
            let sql = "SELECT * FROM users WHERE userName= '" + userName+ "' AND password= '"+password+"' "            
            let results = (await db.query(sql));
            console.log(await db.query(sql))
            return results;
        }
    }


module.exports = users;
