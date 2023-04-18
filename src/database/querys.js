export const queries = {
  getAllResidents: "SELECT * FROM Residentes",

  createNewResident:
    "INSERT INTO Residentes (NOMBRE, NO_CASA, TELEFONO, BLOQUEADO)VALUES (@NOMBRE, @NO_CASA, @TELEFONO, @BLOQUEADO)",

  getResidentById: "SELECT * FROM Residentes WHERE ID = @ID",

  deleteResident: "DELETE FROM [LaColmena].[dbo].[Residentes] WHERE ID = @ID",

  getTotalResidents: "SELECT COUNT(*) FROM Residentes",

  updateResidentById:
    "UPDATE Residentes SET NOMBRE = @NOMBRE, NO_CASA = @NO_CASA, TELEFONO = @TELEFONO, BLOQUEADO = @BLOQUEADO WHERE ID = @ID",

  getBlocked:
    "SELECT NO_CASA, NOMBRE, BLOQUEADO FROM (SELECT NO_CASA, NOMBRE, BLOQUEADO, ROW_NUMBER() OVER (PARTITION BY NO_CASA ORDER BY NO_CASA) AS rn FROM Residentes) sub WHERE rn = 1 ORDER BY NO_CASA ASC;",

  updateBlocked:
    "UPDATE Residentes SET BLOQUEADO = @BLOQUEADO WHERE NO_CASA = @NO_CASA",
};
