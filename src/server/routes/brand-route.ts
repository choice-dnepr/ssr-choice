import { Request, Response, NextFunction } from 'express';
import Brand from '../models/brand';


export class BrandRoute {
  brandRoute(app: any): void {
    app
      .route('/api/create-brand')
      .post((req: Request, res: Response, next: NextFunction) => {
        Brand.create(req.body, (error: any, data: any) => {
          if (error) {
            return next(error);
          } else {
            res.json(data);
          }
        });
      });
    // app
    //   .route('/api/get-brands')
    //   .get((req: Request, res: Response, next: NextFunction) => {
    //     Brand.find((error, data) => {
    //       if (error) {
    //         return next(error);
    //       } else {
    //         res.json(data);
    //       }
    //     });
    //   });
  }
}