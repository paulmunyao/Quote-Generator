export class Quote {
  public name: string;
  public description: string;
  public upvote: number;
  public downvote: number;

  constructor(name: string,description: string,vote:number) {
    this.name = name;
    this.description = description;
    this.upvote = 0;
    this.downvote = 0;
  }
}
