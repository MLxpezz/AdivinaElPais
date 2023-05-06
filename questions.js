import { answers } from "./answers.js";
import { Question } from "./question.js";

export const questions = answers.map(ans => new Question(ans.bandera,ans.choices,ans.answer));
