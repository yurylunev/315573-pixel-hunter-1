const addAnswer = (game, answer) => {
  switch (answer) {
    case `fast`:
    case `correct`:
    case `slow`:
    case `wrong`:
      return Object.freeze(Object.assign({}, game, {answers: [...game.answers, answer]}));
  }
  throw new Error(`Incorrect answer value`);
};

const countScore = (game) => {
  if (game.answers.length < 10) {
    return -1;
  }
  let score = 0;
  let lives = game.lives;
  for (let answer of game.answers) {
    switch (answer) {
      case `fast`:
        score += 150;
        break;
      case `correct`:
        score += 100;
        break;
      case `slow`:
        score += 50;
        break;
      case `wrong`:
        lives = lives - 1;
        break;
    }
    if (lives < 0) {
      return -1;
    }
  }
  return score + lives * 50;
};

export {addAnswer, countScore};
