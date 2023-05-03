export default class Candidate {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId = () => this.id;

  public getName = () => this.name;
}
