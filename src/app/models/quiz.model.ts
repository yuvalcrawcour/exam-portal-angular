import { Question } from "./question.model";

export class Quiz {
    constructor(public questions:Question[],public id:number,public name:string,public description:string){
        
    }
    public addQuestion(question:Question){
        if(!this.questions){
            this.questions=new Array();
        }
        this.questions.push(question);
    }
}
