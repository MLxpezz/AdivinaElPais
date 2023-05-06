export class Quiz {

    constructor(questions) {
        this.questions = questions;
    }

    questionIndex = 0;
    score = 0;

    currentIndex() {
        return this.questions[this.questionIndex];
    }

    isEnded() {
        return this.questions.length === this.questionIndex;
    }


    guess(answer) {
        if(answer === this.questions[this.questionIndex].answer) {
            this.score++;
        }

        this.questionIndex++;
    }


}