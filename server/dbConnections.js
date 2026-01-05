import mysql from 'mysql2/promise'

const db =  await mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: 'Rb072000t',
  database: 'autoiq_db'
})

db.connect ((error)=> {
    if (error) {
      console.log ("Error on DB connect:", error)
      return;
    } 
      console.log ("Connected to AutoIQ DB")
  })
  
  export default db;