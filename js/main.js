import {showScreen} from "./utlis";
import intro from "./screen-intro";
import greeting from "./screen-greeting";
import rules from "./screen-rules";
import game1 from "./screen-game-1";
import {getQuestions} from "./data/game-questions";
import {INITIAL_GAME} from "./data/game-data";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";
import stats from "./screen-stats";
import {decreaseLives, isDead} from "./data/game-lives";
import {isFinalQuestion, nextLevel} from "./data/game-levels";
import {addAnswer} from "./data/game-score";

const renderScreen = (screen, callback, state) => showScreen(screen(callback, state));

const getGameContent = (questions, level) => [game2, game1, game3][questions[level].length - 1];

const gameTick = (state, returnValue) => {
  if (isDead(state) || isFinalQuestion(state)) {
    return renderScreen(stats, addAnswer(state, returnValue));
  } else {
    if (returnValue === `wrong`) {
      return onGameStart(nextLevel(decreaseLives(addAnswer(state, returnValue))));
    }
    return onGameStart(nextLevel(addAnswer(state, returnValue)));
  }
};

const onGameStart = (state) => renderScreen(getGameContent(state.questions, state.level), (returnValue) => gameTick(state, returnValue), state);

const onContinueClick = () => renderScreen(rules, () => onGameStart(getQuestions(INITIAL_GAME)));

const onAsteriskClick = () => renderScreen(greeting, onContinueClick);

renderScreen(intro, onAsteriskClick);
