
export class Interactive {
    constructor(){}


    drawQuestion(text) {

        const questionContent = document.querySelector('.img-container');

        questionContent.innerHTML = '';

        let question = document.createElement('img');
        question.src = `img/${text}.png`;
        question.id = text;
        questionContent.append(question);

    }

    drawChoices(choices,callback) {

        const cContainer = document.querySelector('.choices-container');

        cContainer.innerHTML = '';

        for(let i = 0; i < choices.length; i++) {
            let btn = document.createElement('button');
            btn.textContent = `${choices[i]}`;
            btn.className = `choice`;
            btn.addEventListener('click', e => callback(btn));
            cContainer.append(btn);
        }

    }


    showScore(score) {

        let show = `<span class="puntaje">Tu puntaje es: ${score}</span>`;

        document.querySelector('.choices-container').innerHTML = '';
        document.querySelector('.img-container').innerHTML = show;
    }

    showProgress(progess, long) {

        const pro = document.querySelector('.progress');

        pro.innerHTML = `Pregunta ${progess} de ${long}`;

    }
}