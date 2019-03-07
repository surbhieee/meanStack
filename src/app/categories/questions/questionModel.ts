export class QuestionModel{
    question:string;
    answer:string;
  constructor(values:Object={}){
    Object.assign(this, values);
  }
}
