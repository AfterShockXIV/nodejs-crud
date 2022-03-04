import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection({
    host : 'localhost' , 
    user : 'root' , 
    password : '123456',
    database: 'openchat2'
})

db.connect((error) => {
    if(error){
        console.error(`[error connecting database sql : ${error}]`)
    }

    console.log(`MYSQL connected Success as id : ${db.threadId}`)
})

export const dbQuery = (sql , options) => {
    return new Promise ((resolve , reject) => {
        db.query(sql,options,(err,res) =>{
            if(err){
                throw err
            }
            resolve(res)
        })
    })
}

export default db