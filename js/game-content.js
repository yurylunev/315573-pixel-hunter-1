import {questions} from "./data/game-data";
import game1 from "./screen-game-1";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";
import stats from "./screen-stats";
import {isDead} from "./data/game-lives";

const getGameContent = (state) => {
  if ((state.level === state.maxQuestions) || isDead(state)) {
    return stats(state);
  }
  switch (questions[state.level].length) {
    case 2:
      return game1(state);
    case 1:
      return game2(state);
    case 3:
      return game3(state);
  }
  return 0;
};

export default getGameContent;
