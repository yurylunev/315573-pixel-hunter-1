const rootElement = document.querySelector(`#main`);
const showScreen = (template) => {
  rootElement.innerHTML = ``;
  rootElement.appendChild(template);
};

export {showScreen};
