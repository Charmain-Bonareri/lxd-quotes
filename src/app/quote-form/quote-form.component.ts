import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'//transmitting to quote component(parent)


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date());//format as defined by class property

  @Output() addQuote = new EventEmitter<Quote>();//event emitter to listen and send out new quotes on quote parent component

  submitQuote() {
    this.addQuote.emit(this.newQuote);//this triggers addition of the new quote
  }

  constructor() { }

  ngOnInit() {
  }

}
