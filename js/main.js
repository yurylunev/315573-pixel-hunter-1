import {showScreen} from "./utlis";
import intro from "./screen-intro";
import greeting from "./screen-greeting";
import rules from "./screen-rules";
import game1 from "./screen-game-1";
import {getQuestions} from "./data/game-questions";
import {INITIAL_GAME} from "./data/game-data";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";

const state = getQuestions(INITIAL_GAME);

const showNextScreen = (screen) => {
  const screens = [intro, greeting, rules, game1, game2, game3];
  showScreen(screen(state, () => {
    showNextScreen(screens[screens.indexOf(screen) + 1]);
  }));
};

showNextScreen(intro);
