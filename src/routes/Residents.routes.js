import { Express, Router } from "express";
import { getResidents, createNewResident } from "../controllers/Residents.controller";

const router = Router()

router.get('/residents', getResidents) 

router.post('/residents', createNewResident) 

export default router