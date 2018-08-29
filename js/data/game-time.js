const changeTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }
  if (time > 30) {
    throw new Error(`Time should be less 30 sec`);
  }
  return Object.freeze(Object.assign({}, game, {time}));
};

export {changeTime};
