import { Quiz } from "./quiz.model";
export class QuizSummary {
    constructor(public id:number,public quiz:Quiz,public grade:number,public dateTime:Date){

    }
}
