import { getConnection, sql, queries } from "../database";

export const getResidents = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getAllResidents);
  res.json(result.recordset);
};

export const createNewResident = async (req, res) => {
  const { NOMBRE, NO_CASA, TELEFONO } = req.body;
  let { BLOQUEADO } = req.body;

  if (NOMBRE == null || NO_CASA == null) {
    return res
      .status(400)
      .json({ msg: "Bad Request. Please Fill Nombre & No_Casa" });
  }
  if (BLOQUEADO == null) BLOQUEADO = 0;
  if (BLOQUEADO == "true") BLOQUEADO = 1;
  if (BLOQUEADO == "false") BLOQUEADO = 0;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("NOMBRE", sql.VarChar, NOMBRE)
      .input("NO_CASA", sql.Int, NO_CASA)
      .input("TELEFONO", sql.VarChar, TELEFONO)
      .input("BLOQUEADO", sql.Bit, BLOQUEADO)
      .query(queries.createNewResident);

    res.json("new Product");
  } catch (error) {
    res.json(error);
  }
};

export const getResidentById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("ID", id)
    .query(queries.getResidentById);

  res.json(result.recordset[0]);
};

export const deleteResidentById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("ID", id)
    .query(queries.deleteResident);

  res.sendStatus(204);
};

export const getTotalResidents = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalResidents);

  res.json(result.recordset[0][""]);
};

export const editResidentById = async (req, res) => {
  const { NOMBRE, NO_CASA, TELEFONO, BLOQUEADO } = req.body;
  const { id } = req.params;
  if (BLOQUEADO == null) BLOQUEADO = 0;
  if (BLOQUEADO == "true") BLOQUEADO = 1;
  if (BLOQUEADO == "false") BLOQUEADO = 0;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("NOMBRE", sql.VarChar, NOMBRE)
      .input("NO_CASA", sql.Int, NO_CASA)
      .input("TELEFONO", sql.VarChar, TELEFONO)
      .input("BLOQUEADO", sql.Bit, BLOQUEADO)
      .input("ID", sql.Int, id)
      .query(queries.updateResidentById);

    res.json({ NOMBRE, NO_CASA, TELEFONO, BLOQUEADO });
  } catch (error) {
    console.log(error);
  }
};

export const getBlocked = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getBlocked);

    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los registros bloqueados.");
  }
};

export const editBlocked = async (req, res) => {
  const { NO_CASA, BLOQUEADO } = req.body;
  if (BLOQUEADO == null) BLOQUEADO = false;
  if (BLOQUEADO == "true") BLOQUEADO = true;
  if (BLOQUEADO == "false") BLOQUEADO = false;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("NO_CASA", sql.Int, NO_CASA)
      .input("BLOQUEADO", sql.Bit, BLOQUEADO)
      .query(queries.updateBlocked);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el registro.");
  }
};
