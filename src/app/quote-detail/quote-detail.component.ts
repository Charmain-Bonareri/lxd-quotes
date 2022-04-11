import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();//transmits to the delete trigger from parent component on delete function

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
   }


  upvotes = 0;
  downvotes = 0;


  upVote(){
    this.upvotes = this.upvotes + 1;//adds one on mouse click
  }

  downVote(){
    this.downvotes = this.downvotes + 1;//adds one per mouse click
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
