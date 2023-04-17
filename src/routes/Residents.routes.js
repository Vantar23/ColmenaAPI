import { Express, Router } from "express";
import { getResidents, createNewResident, editResident, getResidentById } from "../controllers/Residents.controller";

const router = Router()

router.get('/residents', getResidents) 

router.post('/residents', createNewResident)

router.get('/residents/:id', getResidentById)

export default router