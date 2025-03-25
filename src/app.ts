import express, { Express } from "express";
const app: Express = express()
const port: number = 3000
app.get('/', (req, res) => {res.send('hello')})
app.listen(port,() => console.log(`Server running on port ${port}`))