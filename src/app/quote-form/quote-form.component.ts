import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() newQuoteEvent = new EventEmitter<Quote>();

  author: string;
  quoteContent: string;
  submitted: string

  


  constructor() { }

  ngOnInit(): void {
  }

}
