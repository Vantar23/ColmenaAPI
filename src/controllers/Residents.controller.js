import { getConnection, sql } from "../database/connection"

export const getResidents = async (req, res) => {
   const pool = await getConnection()
   const result = await pool.request().query('SELECT * FROM Residentes')
   res.json(result.recordset)
}
export const createNewResident = async (req,res) => {
    const {NOMBRE, NO_CASA, TELEFONO} = req.body;
    let {BLOQUEADO} = req.body;

    if(NOMBRE == null || NO_CASA == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill Nombre & No_Casa'})
    }
    if (BLOQUEADO == null) BLOQUEADO = 0;

    const pool = await getConnection()
    await pool.request()
    .input("NOMBRE", sql.VarChar, NOMBRE)
    .input("NO_CASA", sql.Int, NO_CASA)
    .input("TELEFONO", sql.VarChar, TELEFONO)
    .input("BLOQUEADO", sql.Bit, BLOQUEADO)
    .query('INSERT INTO Residentes (NOMBRE, NO_CASA, TELEFONO, BLOQUEADO)VALUES (@NOMBRE, @NO_CASA, @TELEFONO, @BLOQUEADO)')

    res.json('new Product')
}   