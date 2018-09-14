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
import {isDead} from "./data/game-lives";
import {isFinalQuestion, nextLevel} from "./data/game-levels";

const renderScreen = (screen, callback, state) => showScreen(screen(callback, state));

const getGameContent = (state) => [game2, game1, game3][state.questions[state.level].length - 1];

const gameTick = (state) => {
  if (isDead(state) || isFinalQuestion(state)) {
    return renderScreen(stats, state);
  } else {
    return onGameStart(nextLevel(state));
  }
};

const onGameStart = (state) => renderScreen(getGameContent(state), () => gameTick(state), state);

const onContinueClick = () => renderScreen(rules, () => onGameStart(getQuestions(INITIAL_GAME)));

const onAsteriskClick = () => renderScreen(greeting, onContinueClick);

renderScreen(intro, onAsteriskClick);
