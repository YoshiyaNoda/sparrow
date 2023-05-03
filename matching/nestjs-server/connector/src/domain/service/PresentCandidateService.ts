import Candidate from '../model/Candidate';

export default class PresentCandidateService {
  static getCandidateList = (): Candidate[] => {
    return [
      new Candidate('1', '武田 和大v1'),
      new Candidate('2', '武田 和大v2'),
      new Candidate('3', '武田 和大v3'),
    ];
  };
}
