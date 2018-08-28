const countScore = (answers, lives) => {
  let score = 0;
  for (let answerTime of answers) {
    if (answerTime === -1) {
      return -1;
    }
    score += 100;
    if (answerTime > 20) {
      score -= 50;
    }
    if (answerTime < 10) {
      score += 50;
    }
  }
  return score + lives * 50;
};

export {countScore};
