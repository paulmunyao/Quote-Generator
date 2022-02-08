export class Quote {
  public id:number = 0;
  public quote: string;
  public author: string;
  number: number;

  constructor(id:number,author: string,quote:string) {
    this.number = 0;
    this.quote = quote;
    this.author = author;
  }
}
