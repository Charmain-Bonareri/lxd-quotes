export class Quote {

  id: number;
  quotetitle: string;
  quotecontent: string;
  author: string;
  submittedquote: string;


  constructor(id:number, quotetitle:string, quotecontent:string,author:string, submittedquote:string){
    this.id = id
    this.quotetitle = quotetitle
    this.quotecontent = quotecontent
    this.author = author
    this.submittedquote = submittedquote
  }

  // creationdate : Date;
  // like: number;
  // dislike: number;
}
