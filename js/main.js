'use strict';
const order = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
const screens = order.map((screenName) => document.querySelector(`template#${screenName}`));
const showScreen = (screenNumber) => {
  const rootElement = document.querySelector(`#main`);
  rootElement.innerHTML = screens[screenNumber].innerHTML;
};

let currentScreen = 0;
showScreen(currentScreen);

document.addEventListener(`keyup`, (event) => {
  switch (event.key) {
    case `ArrowRight`:
      currentScreen = Math.min(++currentScreen, order.length - 1);
      break;
    case `ArrowLeft`:
      currentScreen = Math.max(--currentScreen, 0);
      break;
  }
  showScreen(currentScreen);
});

document.querySelectorAll(`button.arrows__btn`)[0].addEventListener(`click`, () => {
  currentScreen = Math.max(--currentScreen, 0);
  showScreen(currentScreen);
});
document.querySelectorAll(`button.arrows__btn`)[1].addEventListener(`click`, () => {
  currentScreen = Math.min(++currentScreen, order.length - 1);
  showScreen(currentScreen);
});
