export class Quote {


  constructor(
    public id: number,
    public quotecontent: string,
    public author: string,
    public submittedquote: string,
    public likes: number,
    public dislikes: number,
    public completeDate: Date){

  }

}
