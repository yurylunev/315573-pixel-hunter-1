import {showScreen} from "./utlis";
import intro from "./screen-intro";
import greeting from "./screen-greeting";
import rules from "./screen-rules";
import game1 from "./screen-game-1";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";
import stats from "./screen-stats";
import {getQuestions} from "./data/game-questions";
import {INITIAL_GAME} from "./data/game-data";
import {isFinalQuestion, nextLevel} from "./data/game-levels";
import {addAnswer} from "./data/game-score";
import {decreaseLives} from "./data/game-lives";


const state = getQuestions(INITIAL_GAME);

const SCREENS = [
  {
    name: intro,
    callback: () => {
      nextScreen(0);
    }
  },
  {
    name: greeting,
    callback: () => {
      nextScreen(1);
    }
  },
  {
    name: rules,
    callback: () => {
      nextScreen(2);
    }
  },
  {
    name: game2,
    callback: () => {
      console.log(`game2`);
      nextScreen(3);
    }
  },
  {
    name: game1,
    callback: () => {
      console.log(`game1`);
      const checkedAnswers = [...answers.filter((answer) => answer.control.checked)];
      console.log(`Answers: ${checkedAnswers}`);
      // if (checkedAnswers.length === 2) {
      //   if (checkedAnswers.reduce((flag, answer, index) => (flag && (answer.control.value === state.questions[state.level][index][1])), true)) {
      //     nextLevel(addAnswer(state, `correct`));
      nextScreen(4);
      //   } else {
      //     nextLevel(addAnswer(decreaseLives(state), `wrong`));
      //     nextScreen(4);
      //   }
      // }
    }
  },
  {
    name: game3,
    callback: () => {
      console.log(`game3`);
      nextLevel(addAnswer(state, `correct`));
      nextScreen(4);
      // showScreen(getGameContent(nextLevel(addAnswer(state, `correct`))));
      // showScreen(getGameContent(nextLevel(addAnswer(decreaseLives(state), `wrong`))));
    }
  },
  {
    name: stats,
    callback: () => {
    }
  }];

const getNextScreenNumber = (currentScreen) => {
  if (currentScreen < 3) {
    return currentScreen + 1;
  } else {
    if (isFinalQuestion(state)) {
      return 6;
    } else {
      return state.questions[state.level].length + 3;
    }
  }
};

const nextScreen = (currentScreen) => {
  const next = getNextScreenNumber(currentScreen);
  console.log(`Current: ${currentScreen}, Next: ${next}`);
  console.log(`Name of Screen: ${SCREENS[currentScreen].name}`);
  console.log(`Callback: `);
  console.log(SCREENS[next].callback);
  showScreen(SCREENS[currentScreen].name(state, SCREENS[next].callback));
};

nextScreen(0);
