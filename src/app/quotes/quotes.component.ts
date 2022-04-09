import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]= [
    {id:1, quotetitle:'Learning',quotecontent:'Play is the highest form of research.',author: 'Albert Einsten',submittedquote:'Salma'},
    {id:2, quotetitle:'Learning',quotecontent:'Tell me and I forget, teach me and I may remember, involve me and I learn.', author:'Benjamin Franklin', submittedquote:'Kahinga'},
    {id:3, quotetitle:'Learning', quotecontent:'He who laughs most learns best.', author:'John Cleese', submittedquote:'Charmain'},
    {id:4, quotetitle:'Design', quotecontent:'When UX doesn’t consider ALL users, shouldn’t it be known as “SOME User Experience” or… SUX?', author:'Billy Gregory', submittedquote:'Charmain'},
    {id:5, quotetitle:'Design', quotecontent:'Art has to move you and design does not, unless it is a good design for a bus', author:'David Hockney',submittedquote:'Anastacia'},
    {id:6, quotetitle:'Design', quotecontent:'The life of a designer is a life of a fight, fight against the ugliness and dullness', author:'Massimo Vignelli', submittedquote:'Lawrencio'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
