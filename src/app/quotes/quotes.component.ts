import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input()  quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quotes:Quote[]= [
    new Quote(1,'"Play is the highest form of research."', '- Albert Einsten','Salma', new Date(2022,3,14)),
    new Quote(2, '"Tell me and I forget, teach me and I may remember, involve me and I learn."', '- Benjamin Franklin','Kahinga', new Date(2020,4,13)),
    new Quote(3,  '"He who laughs most learns best."','- John Cleese','Charmain', new Date(2022,2,2)),
    new Quote(4,  '"When UX doesn’t consider ALL users, shouldn’t it be known as “SOME User Experience” or… SUX?"', '- Billy Gregory', 'Charmain',new Date(2021,1,12)),
    new Quote(5,  '"Art has to move you and design does not, unless its’s a good design for a bus."', '- David Hockney','Anastacia', new Date(2019,6,9)),
    new Quote(6,  '"The life of a designer is a life of a fight, fight against the ugliness and dullness."', '- Massimo Vignelli', 'Lawrencio', new Date(2021,7,18)),
  ];

 
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].author}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
