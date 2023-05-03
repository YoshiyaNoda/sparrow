import Candidate from 'src/domain/model/Candidate';
import CandidateResponse from '../response/CandidateResponse';

export default class CandidateToResponseConverter {
  static convert = (candidateList: Candidate[]): CandidateResponse[] => {
    return candidateList.map(
      (candidate: Candidate) => new CandidateResponse(candidate.getName()),
    );
  };
}
