import { Injectable } from '@nestjs/common';
import CandidateResponse from '../response/CandidateResponse';
import PresentCandidateDomainService from 'src/domain/service/PresentCandidateService';
import Candidate from 'src/domain/model/Candidate';
import CandidateToResponseConverter from 'src/app/converter/CandidateToResponseConverter';

@Injectable()
export class AppService {
  getCandidateList(): CandidateResponse[] {
    const candidateList: Candidate[] =
      PresentCandidateDomainService.getCandidateList();
    return CandidateToResponseConverter.convert(candidateList);
  }
}
