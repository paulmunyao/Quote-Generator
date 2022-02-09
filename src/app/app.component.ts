import { Component } from '@angular/core';
import {Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    {quote:'They came an ate our food',author:'~Morocco Proverb~',publisher:'P'},
    {quote:'A house without books is like a house without windows',author:'~Anonymous~',publisher:'A'},
    {quote:'Lack is when preparation meets success',author:'~Paul~',publisher:'L'},
  ];
}
