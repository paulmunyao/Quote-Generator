export class Quote {
  showPublisher: boolean;
  // public quote: string;
  // public author: string;
  // public publisher: string;
  constructor(public author: string, public quote: string, public publisher: string,public completeDate: Date) {
    // this.quote = quote;
    // this.author = author;
    // this.publisher = publisher;
    this.showPublisher = false; 
  }
}
