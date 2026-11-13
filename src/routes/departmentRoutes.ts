import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.send('vores afdelinger'); 
});

routes.get('/jylland', (req: Request, res: Response) => {
  res.send('det jylland'); 
});

routes.get('/sjælland', (req: Request, res: Response) => {
  res.send('det sjælland'); 
});

routes.get('/fyn', (req: Request, res: Response) => {
  res.send('det fyn'); 
});

export const departRoutes = routes 