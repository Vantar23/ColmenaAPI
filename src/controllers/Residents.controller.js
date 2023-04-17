import { getConnection, sql, queries } from "../database"

export const getResidents = async (req, res) => {
   const pool = await getConnection()
   const result = await pool.request().query(queries.getAllResidents)
   res.json(result.recordset)
}
export const createNewResident = async (req,res) => {
    const {NOMBRE, NO_CASA, TELEFONO} = req.body;
    let {BLOQUEADO} = req.body;

    if(NOMBRE == null || NO_CASA == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill Nombre & No_Casa'})
    }
    if (BLOQUEADO == null) BLOQUEADO = 0;

    try {
        const pool = await getConnection()
        await pool.request()
        .input("NOMBRE", sql.VarChar, NOMBRE)
        .input("NO_CASA", sql.Int, NO_CASA)
        .input("TELEFONO", sql.VarChar, TELEFONO)
        .input("BLOQUEADO", sql.Bit, BLOQUEADO)
        .query(queries.createNewResident)
    
        res.json('new Product')
    } catch (error) {
        res.json(error)
    }

}

export const getResidentById = async (req,res) => {
    const pool = await getConnection()
    const result = await pool.request()
    .input('ID', id)
    .query(getResidentById)

    console.log(result)
}