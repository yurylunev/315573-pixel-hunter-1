const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0,
  answers: []
});

const repeatFunction = (f, count, args) => {
  if (count > 1) {
    return f(repeatFunction(f, count - 1, args));
  }
  return f(args);
};

const deepFunction = (f, args, initial) => {
  if (args.length > 1) {
    let firstArgs = args;
    let lastArg = firstArgs.pop();
    return f(deepFunction(f, firstArgs, initial), lastArg);
  }
  return f(initial, args[0]);
};

export {INITIAL_GAME, repeatFunction, deepFunction};
