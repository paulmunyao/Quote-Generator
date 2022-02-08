import { Component } from '@angular/core';
import {Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    {quote:'Watch finding Nemo',author:'Paul'},
    {quote:'Watch finding Nemo',author:'Paul'},
    {quote:'Watch finding Nemo',author:'Paul'},
  ];
}
