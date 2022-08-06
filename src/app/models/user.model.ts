import { QuizSummary } from "./quiz-summary.model";

export class User {
    constructor(public id?:number,public userName?:string,public email?:string, public password?:string,public quizSummaries?:QuizSummary[]){
    }
}
