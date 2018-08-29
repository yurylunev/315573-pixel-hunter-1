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

const countScore = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }
  let score = 0;
  for (let answer of answers) {
    if (lives < 0) {
      return -1;
    }
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
  }
  return score + lives * 50;
};

export {addAnswer, countScore};
