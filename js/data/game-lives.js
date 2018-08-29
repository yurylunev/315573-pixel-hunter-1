const changeLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  return Object.freeze(Object.assign({}, game, {lives}));
};

export {changeLives};
