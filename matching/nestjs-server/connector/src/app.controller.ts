import { Controller, Get } from '@nestjs/common';
import { AppService } from './app/service/app.service';
import CandidateResponse from './app/response/CandidateResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): CandidateResponse[] {
    return this.appService.getCandidateList();
  }
}
