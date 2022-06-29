
import express, { Express, Request, Response } from 'express';

const app:Express = express()
const port:number = 3000

app.get('/', async  (req:Request, res:Response) => res.send("Olá MUNDO!"))

app.listen(port, () => {
  console.log(`App ativo na porta ${port}`)
})
