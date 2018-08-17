const rootElement = document.querySelector(`#main`);
const showScreen = (elements) => {
  rootElement.innerHTML = ``;
  [...elements.children].forEach((element) => {
    rootElement.appendChild(element);
  });
};

const getElementFromTemplate = (template) => {
  const parser = new DOMParser();
  const element = parser.parseFromString(template, `text/html`);
  return element.body;
};

export {getElementFromTemplate, showScreen};
