import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const DEV_CLIENT_ORIGIN = 'http://localhost:3000';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // ここで設定しているだけではダメで、 NestFactory.create で cors: true を渡さないとCORSで弾かれる
    res.header('Access-Control-Allow-Origin', [DEV_CLIENT_ORIGIN]);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  }
}
