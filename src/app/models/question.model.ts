export class Question {
    constructor(public id: number, public time: number, public question: string, public firstAnswer: string, public secondAnswer: string, public thirdAnswer: string, public forthAnswer: string, public rightAnswer: number) {
        this.id=id;
        this.question=question;
    }
}
