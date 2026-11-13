import express, { Request, Response } from 'express';
import { carRoutes } from './routes/carRoutes.js';
import { departRoutes } from './routes/departmentRoutes.js';
const app = express()

app.use('/cars', carRoutes) // Anvender carRoutes i app elementet
app.use('/depart', departRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Biler!'); 
});

app.get('/about-us', (req: Request, res: Response) => {
  res.send('her er vi'); 
});

app.get('/contact', (req: Request, res: Response) => {
  res.send('ik skriv til os '); 
});

app.use((req: Request, res: Response) => {
  res.send('404 - site not found')
})

app.listen(4242, () => {
  console.log('Server runs at http://localhost:4242');
})



/*
app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get("/about", (req: Request, res: Response) => {
  res.send('canadians would pronounce this Aboot')
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/