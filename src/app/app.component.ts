import { Component } from '@angular/core';
import {Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    {quote:'They came an ate our food',author:'~Morocco Proverb~'},
    {quote:'A house without books is like a house without windows',author:'~Anonymous~'},
    {quote:'Lack is when preparation meets success',author:'~Paul~'},
  ];
}
