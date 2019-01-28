
const { Pool, Client } =require('pg');

const connect = "postgres://postgres:123@localhost:5432/productos_db";

const pool = new Pool({
    connectionString: connect,
  })
  
  const client = new Client({
    connectionString: connect,
  })

  client.connect()
        .then(console.log('base de datos conectandas'))
        .catch((e: Error) => console.error(e.stack));
 
    
export default pool;
