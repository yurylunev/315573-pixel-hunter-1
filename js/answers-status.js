const getStatusBar = (answers) => {
  return `<ul class="stats">${answers.reduce((html, answer) => {
    return html + `<li class="stats__result stats__result--${answer}"></li>`;
  }, ``)}</ul>`;
};

export default getStatusBar;
