'use strict';
const screens = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`].map((screenName) => document.querySelector(`template#${screenName}`));
const rootElement = document.querySelector(`#main`);
let currentScreen;
const showScreen = (screenNumber = 0) => {
  if (currentScreen !== screenNumber) {
    currentScreen = Math.min(screens.length - 1, Math.max(0, screenNumber));
    rootElement.innerHTML = ``;
    rootElement.appendChild((screens[currentScreen].content).cloneNode(true));
  }
};

showScreen();

document.addEventListener(`keyup`, (event) => {
  switch (event.key) {
    case `ArrowRight`:
      showScreen(currentScreen + 1);
      break;
    case `ArrowLeft`:
      showScreen(currentScreen - 1);
      break;
  }
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
  showScreen(currentScreen - 1);
});
arrowButtons[1].addEventListener(`click`, () => {
  showScreen(currentScreen + 1);
});
