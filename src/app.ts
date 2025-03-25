import express, { Express } from "express";
import transactionRoutes from './routes/transactionRoutes';
import userRoutes from "./routes/userRoutes"; 
const app: Express = express()
app.use(express.json())
app.use('/transactions', transactionRoutes)
app.use('/users', userRoutes)
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));