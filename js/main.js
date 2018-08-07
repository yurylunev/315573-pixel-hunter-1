'use strict';
const screens = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`].map((screenName) => document.querySelector(`template#${screenName}`));
const rootElement = document.querySelector(`#main`);
const showScreen = (screenNumber) => {
  rootElement.innerHTML = ``;
  rootElement.appendChild((screens[screenNumber].content).cloneNode(true));
};

let currentScreen = 0;
showScreen(currentScreen);

document.addEventListener(`keyup`, (event) => {
  switch (event.key) {
    case `ArrowRight`:
      currentScreen = Math.min(++currentScreen, screens.length - 1);
      break;
    case `ArrowLeft`:
      currentScreen = Math.max(--currentScreen, 0);
      break;
  }
  showScreen(currentScreen);
});

const arrowsWrapper = document.createElement(`div`);
arrowsWrapper.classList.add(`arrows__wrap`);
arrowsWrapper.innerHTML = `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }

    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;
document.body.appendChild(arrowsWrapper);

const arrowButtons = document.querySelectorAll(`button.arrows__btn`);
arrowButtons[0].addEventListener(`click`, () => {
  currentScreen = Math.max(--currentScreen, 0);
  showScreen(currentScreen);
});
arrowButtons[1].addEventListener(`click`, () => {
  currentScreen = Math.min(++currentScreen, screens.length - 1);
  showScreen(currentScreen);
});
