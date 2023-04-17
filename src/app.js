import express from "express";
import config from "./config";
import productsRoutes from './routes/Residents.routes'
import cors from "cors";


const app = express()

// Permitir solicitudes de origen cruzado desde http://localhost:3001
app.use(cors({
    origin: 'http://localhost:3001'
  }));


//Settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(productsRoutes)

export default app