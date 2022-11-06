import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
  // get connection config
  const config = useRuntimeConfig()
  // create the connection
  const connection = await mysql.createConnection(
    {
      host: config.connection.host,
      database: config.connection.name,
      user: config.connection.user,
      password: config.connection.password
    });

  // query database
  return (await connection.execute('select * from `servicio`'))[0];
})
