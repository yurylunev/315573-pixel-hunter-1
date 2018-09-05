import {getElementFromTemplate, showScreen} from "./utlis";
import stats from "./screen-stats";
import greeting from "./screen-greeting";
import getHeader from "./game-header";
import getStatusBar from "./answers-status";
import getGameContent from "./game-content";

const state = {
  answers: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`],
  timer: 30,
  lives: 2
};

const questions = [
  [
    [`http://placehold.it/468x458`, `photo`],
    [`http://placehold.it/468x458`, `paint`]
  ],
  [
    [`http://placehold.it/468x458`, `photo`]
  ],
  [
    [`http://placehold.it/304x455`, `photo`],
    [`http://placehold.it/304x455`, `paint`],
    [`http://placehold.it/304x455`, `paint`]
  ]
];

const game3 = () => {
  const game3Element = getElementFromTemplate(`${getHeader(state.timer, state.lives)}
  <section class="game">
    ${getGameContent(questions[2])}
    ${getStatusBar(state.answers)}
  </section>`);

  [...game3Element.querySelectorAll(`.game__option`)].forEach((radio) => {
    radio.addEventListener(`click`, () => {
      showScreen(stats());
    });
  });

  (game3Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game3Element;
};

export default game3;
