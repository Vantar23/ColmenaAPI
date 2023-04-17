import { createNewResident } from "../controllers/Residents.controller";

export const queries = {
    getAllResidents: 'SELECT * FROM Residentes',
    createNewResident: 'INSERT INTO Residentes (NOMBRE, NO_CASA, TELEFONO, BLOQUEADO)VALUES (@NOMBRE, @NO_CASA, @TELEFONO, @BLOQUEADO)',
    getResidentById: 'SELECT * FROM Residentes WHERE ID = @ID'
}