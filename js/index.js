

import {showScreen} from "./utlis";
import intro from "./screen-intro";
import greeting from "./screen-greeting";
import rules from "./screen-rules";
import game1 from "./screen-game-1";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";
import stats from "./screen-stats";
import getGameContent from "./game-content";
import {INITIAL_GAME} from "./data/game-data";
import {getQuestions} from "./data/game-questions";
import {nextLevel} from "./data/game-levels";
import {addAnswer} from "./data/game-score";
import {decreaseLives} from "./data/game-lives";

const state = getQuestions(INITIAL_GAME);

const SCREENS = [
  {
    name: intro,
    callback: () => {
      showScreen(greeting());
    }
  },
  {
    name: greeting,
    callback: () => {
      showScreen(rules());
    }
  },
  {
    name: rules,
    callback: () => {
      showScreen(getGameContent(state));
    }
  },
  {
    name: game1,
    callback: () => {
      getGameContent(state, () => {
        const checkedAnswers = [...state.answers.filter((answer) => answer.control.checked)];
        if (checkedAnswers.length === 2) {
          if (checkedAnswers.reduce((flag, answer, index) => (flag && (answer.control.value === state.questions[state.level][index][1])), true)) {
            showScreen(getGameContent(nextLevel(addAnswer(state, `correct`))));
          } else {
            showScreen(getGameContent(nextLevel(addAnswer(decreaseLives(state), `wrong`))));
          }
        }
      });
    }
  },
  {
    name: game2,
    callback: () => {
      getGameContent(state, () => {
        nextLevel(addAnswer(state, `correct`));
      }, () => {
        nextLevel(addAnswer(decreaseLives(state), `wrong`));
      });
    }
  },
  {
    name: game3,
    callback: () => {
      getGameContent(state, () => {
        showScreen(getGameContent(nextLevel(addAnswer(state, `correct`))));
      }, () => {
        showScreen(getGameContent(nextLevel(addAnswer(decreaseLives(state), `wrong`))));
      });
    }
  },
  {
    name: stats,
    callback: () => {
    }
  }];

const addEvents = (currentScreen) => {
  if (currentScreen < 6) {
    SCREENS[currentScreen].name(SCREENS[currentScreen].callback, state);
    addEvents(currentScreen + 1);
  }
  return 0;
};

addEvents(0);
showScreen(intro(() => {
  showScreen(greeting());
}));
