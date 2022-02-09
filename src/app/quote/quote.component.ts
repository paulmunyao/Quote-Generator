import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})        
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('They came an ate our food', '~Morocco Proverb~', '~P~',new Date(2022,3,14)),
    new Quote(
      'A house without books is like a house without windows',
      '~Anonymous~',
      '~A~',new Date(2020,3,14)
    ),
    new Quote('Lack is when preparation meets success', '~Paul~', '~L~',new Date(2022,3,14)),
  ];
  // quotes: any;

    toggleDetails(index: any){
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }
   completeGoal(isComplete: any, index: any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
