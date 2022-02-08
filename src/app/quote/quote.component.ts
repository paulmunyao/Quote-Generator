import { Component, OnInit } from '@angular/core';
// import {Quote } from './quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
    {quote:'They came an ate our food',author:'~Morocco Proverb~'},
    {quote:'A house without books is like a house without windows',author:'~Anonymous~'},
    {quote:'Lack is when preparation meets success',author:'~Paul~'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
