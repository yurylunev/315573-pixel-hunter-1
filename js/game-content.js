import game1 from "./screen-game-1";
import game2 from "./screen-game-2";
import game3 from "./screen-game-3";

const getGameContent = (state) => [game2, game1, game3][state.questions[state.level].length - 1];

export default getGameContent;
