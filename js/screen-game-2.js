import {getElementFromTemplate, showScreen} from "./utlis";
import game3 from "./screen-game-3";
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

const game2 = () => {
  const game2Element = getElementFromTemplate(`${getHeader(state.timer, state.lives)}
  <section class="game">
    ${getGameContent(questions[1])}
    ${getStatusBar(state.answers)}
  </section>`);

  [...game2Element.querySelectorAll(`.game__answer`)].forEach((radio) => {
    radio.addEventListener(`click`, () => {
      showScreen(game3());
    });
  });

  (game2Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game2Element;
};

export default game2;
