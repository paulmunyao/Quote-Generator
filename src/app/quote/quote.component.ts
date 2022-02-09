import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {'They came an ate our food ', '~Morocco Proverb~', '~P~'},
    {
      quote: 'A house without books is like a house without windows',
      author: '~Anonymous~',publisher:'~A~',
    },
    { quote: 'Lack is when preparation meets success', author: '~Paul~' ,publisher:'~L~'},
  ];

  constructor() {}

  ngOnInit(): void {}
}
