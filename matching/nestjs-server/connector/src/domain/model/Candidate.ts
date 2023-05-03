export default class Candidate {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName = () => this.name;
}
