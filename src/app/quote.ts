export class Quote {
  public quote: string;
  public author: string;
  public publisher: string;
  constructor(author: string, quote: string, publisher: string) {
    this.quote = quote;
    this.author = author;
    this.publisher = publisher;
  }
}
