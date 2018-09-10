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

const state = getQuestions(INITIAL_GAME);

const SCREENS = [
  {
    name: intro,
    callback: () => {
      console.log(`intro`);
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
      showScreen(getGameContent());
    }
  },
  {
    name: game1,
    callback: () => {
      showScreen(getGameContent());
    }
  },
  {
    name: game2,
    callback: () => {
      showScreen(getGameContent());
    }
  }, {
    name: game3,
    callback: () => {
      showScreen(getGameContent());
    }
  }, {
    name: stats,
    callback: () => {
    }
  }];

const addEvents = (currentScreen) => {
  console.log(`addEvents: ${currentScreen}`);
  if (currentScreen < 6) {
    SCREENS[currentScreen].name(SCREENS[currentScreen].callback, state);
    addEvents(currentScreen + 1);
  }
  return 0;
};

addEvents(0);
showScreen(intro());
