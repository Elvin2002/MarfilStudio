require("dotenv").config();
var mysql = require("mysql");
class Controller {
    constructor() {
        const dbHost = process.env.DB_HOST;
        const dbPort = process.env.DB_PORT;
        const dbUser = process.env.DB_USER; 
        const dbPass = process.env.DB_PASSWORD; 
        const db = process.env.DB_DATABASE;
        this.connection = mysql.createConnection({
            host: dbHost,
            port: dbPort,
            user: dbUser,
            password: dbPass,   
            database: db
        });
        this.connection.connect((err) => {
            if (err) {
                console.log("Conexión no establecida");
                return false;
            }
            console.log("Conexión establecida");
        });
    }
}

var MiController = new Controller();
