import {getElementFromTemplate, showScreen} from "./utlis";
import greeting from "./screen-greeting";
import getStatusBar from "./answers-status";
import getHeader from "./game-header";

const game1 = (state, callback) => {
  console.log(state);
  console.log(`Callback: ${callback}`);
  const game1Element = getElementFromTemplate(`${getHeader(state.time, state.lives)}
  <section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${state.questions[state.level].reduce((html, question, index) => html + `<div class="game__option">
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
    label.control.addEventListener(`click`, callback);
  });

  (game1Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game1Element;
};

export default game1;
