import {getElementFromTemplate, showScreen} from "./utlis";
import game2 from "./screen-game-2";
import greeting from "./screen-greeting";
import getStatusBar from "./answers-status";
import getHeader from "./game-header";
import getGameContent from "./game-content";

const state = {
  answers: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`],
  timer: 30,
  lives: 2,
};

const gameData = {
  questions: [
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
  ]
};


const game1 = () => {
  const game1Element = getElementFromTemplate(`${getHeader(state.timer, state.lives)}
  <section class="game">
    ${getGameContent(gameData.questions[0])}
    ${getStatusBar(state.answers)}
  </section>`);

  const answers = [...game1Element.querySelectorAll(`.game__answer`)];
  answers.forEach((label) => {
    label.control.addEventListener(`click`, () => {
      if ([...answers.filter((answer) => answer.control.checked)].length === 2) {
        showScreen(game2());
      }
    });
  });

  (game1Element.querySelector(`button.back`)).addEventListener(`click`, () => {
    showScreen(greeting());
  });
  return game1Element;
};

export default game1;
