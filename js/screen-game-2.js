import {getElementFromTemplate, showScreen} from "./utlis";
import greeting from "./screen-greeting";
import getHeader from "./game-header";
import getStatusBar from "./answers-status";

const game2 = (callback, state) => {
  const game2Element = getElementFromTemplate(`${getHeader(state.time, state.lives)}
  <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${state.questions[state.level][0][0]}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${getStatusBar(state.answers)}
  </section>`);

  [...game2Element.querySelectorAll(`.game__answer`)].forEach((answer) => {
    if (state.questions[state.level][0][1] === answer.control.value) {
      answer.addEventListener(`click`, callback);
    } else {
      answer.addEventListener(`click`, callback);
    }
  });

  (game2Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game2Element;
};

export default game2;
