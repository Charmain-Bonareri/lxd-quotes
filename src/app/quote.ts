export class Quote {

  showDescription= true;


  constructor(
    public id: number,
    public quotecontent: string,
    public author: string,
    public submittedquote: string,
    public completeDate: Date){
  }

}
