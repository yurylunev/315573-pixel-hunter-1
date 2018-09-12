import {getElementFromTemplate, showScreen} from "./utlis";
import greeting from "./screen-greeting";
import getHeader from "./game-header";
import getStatusBar from "./answers-status";

const game3 = (state, callback) => {
  const game3Element = getElementFromTemplate(`${getHeader(state.time, state.lives)}
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      ${state.questions[state.level].reduce((html, question, index) => html + `<div class="game__option">
        <img src="${question[0]}" alt="Option ${index}" width="304" height="455">
      </div>`, ``)}
    </form>
    ${getStatusBar(state.answers)}
  </section>`);

  [...game3Element.querySelectorAll(`.game__option`)].forEach((answer, index) => {
    if (state.questions[state.level][index][1] === `paint`) {
      answer.addEventListener(`click`, callback);
    } else {
      answer.addEventListener(`click`, callback);
    }
  });

  (game3Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game3Element;
};

export default game3;
