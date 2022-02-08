export class Quote {
  public id:number = 0;
  public name: string;
  public author: string;
  number: number;

  constructor(id:number,name: string,author: string,quote:string) {
    this.number =0;
    this.name = name;
    this.author = author;
  }
}
