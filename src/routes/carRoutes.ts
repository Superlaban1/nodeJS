import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.send('Her er carRouter!'); 
});

routes.get('/sold-cars', (req: Request, res: Response) => {
  res.send('its gone'); 
});

export const carRoutes = routes 