import { Express, Router } from "express";
import {
  getResidents,
  createNewResident,
  getResidentById,
  deleteResidentById,
  getTotalResidents,
  editResidentById,
  getBlocked,
  editBlocked,
} from "../controllers/Residents.controller";

const router = Router();

router.get("/residents", getResidents);

router.post("/residents", createNewResident);

router.get("/residents/count", getTotalResidents);

router.get("/residents/:id", getResidentById);

router.delete("/residents/:id", deleteResidentById);

router.put("/residents/:id", editResidentById);

router.get("/blocked", getBlocked);

router.put("/blocked/:no_casa", editBlocked);

export default router;
