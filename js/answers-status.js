import {questions} from "./data/game-data";

const getAnswers = (answers) => {
  return questions.reduce((html, question, index) => {
    if (answers[index]) {
      return html + `<li class="stats__result stats__result--${answers[index]}"></li>`;
    } else {
      return html + `<li class="stats__result stats__result--unknown"></li>`;
    }
  }, ``);
};

const getStatusBar = (answers) => {
  return `<ul class="stats">
  ${getAnswers(answers)}
  </ul>`;
};

export default getStatusBar;
