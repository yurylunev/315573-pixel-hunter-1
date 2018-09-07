import {getElementFromTemplate, showScreen} from "./utlis";
import greeting from "./screen-greeting";
import getStatusBar from "./answers-status";
import getHeader from "./game-header";
import getGameContent from "./game-content";
import {questions} from "./data/game-data";
import {nextLevel} from "./data/game-levels";
import {addAnswer} from "./data/game-score";
import {decreaseLives} from "./data/game-lives";

const game1 = (state) => {
  const game1Element = getElementFromTemplate(`${getHeader(state.time, state.lives)}
  <section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${questions[state.level].reduce((html, question, index) => html + `<div class="game__option">
        <img src="${question[0]}" alt="Option ${index}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${index}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${index}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`, ``)}
    </form>
    ${getStatusBar(state.answers)}
  </section>`);

  const answers = [...game1Element.querySelectorAll(`.game__answer`)];
  answers.forEach((label) => {
    label.control.addEventListener(`click`, () => {
      const checkedAnswers = [...answers.filter((answer) => answer.control.checked)];
      if (checkedAnswers.length === 2) {
        if (checkedAnswers.reduce((flag, answer, index) => (flag && (answer.control.value === questions[state.level][index][1])), true)) {
          showScreen(getGameContent(nextLevel(addAnswer(state, `correct`))));
        } else {
          showScreen(getGameContent(nextLevel(addAnswer(decreaseLives(state), `wrong`))));
        }
      }
    });
  });

  (game1Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game1Element;
};

export default game1;
