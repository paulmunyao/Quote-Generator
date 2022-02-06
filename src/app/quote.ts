export class Quote {
  public name: string;
  public author: string;
  public upvote: number;
  public downvote: number;

  constructor(name: string,author: string,vote:number) {
    this.name = name;
    this.author = author;
    this.upvote = 0;
    this.downvote = 0;
  }
}
