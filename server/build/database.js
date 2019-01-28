"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool, Client } = require('pg');
const connect = "postgres://postgres:123@localhost:5432/productos_db";
const pool = new Pool({
    connectionString: connect,
});
const client = new Client({
    connectionString: connect,
});
client.connect()
    .then(console.log('base de datos conectandas'))
    .catch((e) => console.error(e.stack));
exports.default = pool;
