import game1 from "./screen-game-1";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";
import stats from "./screen-stats";
import {isDead} from "./data/game-lives";

const getGameContent = (state, callback1, callback2) => {
  if ((state.level === state.answers.length) || isDead(state)) {
    return stats(state, callback1, callback2);
  }
  switch (state.questions[state.level].length) {
    case 2:
      return game1(state, callback1, callback2);
    case 1:
      return game2(state, callback1, callback2);
    case 3:
      return game3(state, callback1, callback2);
  }
  return 0;
};

export default getGameContent;
