import { questions } from './questions.js';
import { Quiz } from './Quiz.js';
import { Interactive } from './Interactive.js';

const start = document.querySelector('.start');

start.addEventListener('click', e => {
    main();
    start.style.display = 'none';
});


const render = (quiz, interac) => {
        if(quiz.isEnded()) {
            interac.showScore(quiz.score);
            document.querySelector('.progress').innerHTML = '';
            setTimeout(() => {
                start.style.display = 'block';
                document.querySelector('.img-container').innerHTML = '';
            },1500);
        } else {
            interac.drawQuestion(quiz.currentIndex().bandera);
            interac.drawChoices(quiz.currentIndex().choices, (currentIndex) => {
            quiz.guess(currentIndex.textContent);
            render(quiz, interac);
            console.log(quiz.score);
            });
            interac.showProgress(quiz.questionIndex+1, quiz.questions.length);
        }
}

function main() {

    const quiz = new Quiz(questions);
    const interac = new Interactive();

    render(quiz, interac);
}

