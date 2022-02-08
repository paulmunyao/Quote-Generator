export class Quote {
  public quote: string;
  public author: string;

  constructor(author: string, quote: string) {
    this.quote = quote;
    this.author = author;
  }
}
