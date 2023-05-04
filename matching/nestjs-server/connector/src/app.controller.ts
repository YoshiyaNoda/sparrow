import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app/service/app.service';
import CandidateResponse from './app/response/CandidateResponse';
import MateResponse from './app/response/MateResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCandidateList(): CandidateResponse[] {
    return this.appService.getCandidateList();
  }

  // 友達の友達は友達機能作っとけばこの返し方でいい
  // 今の段階だとやりすぎな気もするけど
  @Post('/favor')
  favor(): MateResponse[] {
    return [
      new MateResponse('1', '武田 和大v1')
    ];
  }
}
