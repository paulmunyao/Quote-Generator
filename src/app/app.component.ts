import { Component } from '@angular/core';
import {Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
   new Quote('They came an ate our food','~Morocco Proverb~','~P~'),
   new Quote('A house without books is like a house without windows','~Anonymous~','~A~'),
    new Quote('Lack is when preparation meets success','~Paul~','~L~'),
  ];

    toggleDetails(index: any){
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }
   completeGoal(isComplete: any, index: any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
}
