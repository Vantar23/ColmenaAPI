import sql from "mssql";

const dbSettings = {
  user: "sa",
  password: "Aeaa5703$",
  server: "localhoast",
  database: "LaColmena",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};
async function getConnection() {
  const pool = await sql.connect(dbSettings);
  const result = await pool.request().query("SELECT 1");
  console.log(result);
}

getConnection();
