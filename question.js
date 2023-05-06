export class Question {

    constructor(bandera, choices, answer) {
        this.bandera = bandera;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer(choice) {
        return this.answer === choice;
    }

}