import express, { Express } from "express";
import transactionRoutes from './routes/transactionRoutes'; 
const app: Express = express()
const port: number = 3000
app.use(express.json())
app.use('/transactions', transactionRoutes)
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));