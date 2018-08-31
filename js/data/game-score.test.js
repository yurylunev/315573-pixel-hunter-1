import {assert} from "chai";
import {addAnswer, countScore} from "./game-score";
import {deepFunction, INITIAL_GAME} from "./game-data";

describe(`Check count score`, () => {

  it(`Should be correct answers array when add new answer`, () => {
    assert.deepEqual(deepFunction(addAnswer, [`wrong`, `correct`, `fast`], INITIAL_GAME)
      .answers, [`wrong`, `correct`, `fast`]);
    assert.deepEqual(deepFunction(addAnswer, [`wrong`, `correct`, `fast`, `slow`, `correct`, `fast`, `slow`, `wrong`, `correct`, `correct`], INITIAL_GAME)
      .answers, [`wrong`, `correct`, `fast`, `slow`, `correct`, `fast`, `slow`, `wrong`, `correct`, `correct`]);
  });

  it(`Should not allow add incorrect answer value`, () => {
    assert.throws(() => deepFunction(addAnswer, [`wrong`, `correct`, `fasts`], INITIAL_GAME), `Incorrect answer value`);
    assert.throws(() => deepFunction(addAnswer, [``, `correct`, `fast`], INITIAL_GAME), `Incorrect answer value`);
    assert.throws(() => deepFunction(addAnswer, [null, `correct`, `fast`], INITIAL_GAME), `Incorrect answer value`);
    assert.throws(() => deepFunction(addAnswer, [undefined, `correct`, `fast`], INITIAL_GAME), `Incorrect answer value`);
    assert.throws(() => deepFunction(addAnswer, [[], `correct`, `fast`], INITIAL_GAME), `Incorrect answer value`);
  });

  describe(`Answers less then 10`, () => {
    it(`Should be -1`, () => {
      assert.equal(countScore(deepFunction(addAnswer, [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`], INITIAL_GAME).answers, 3), -1);
      assert.equal(countScore(addAnswer(INITIAL_GAME, `correct`).answers, 3), -1);
    });
  });

  describe(`10 correct answers`, () => {

    it(`Should be 1150`, () => {
      assert.equal(countScore(deepFunction(addAnswer, [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`], INITIAL_GAME).answers, 3), 1150);
    });
  });

  describe(`Count score with any answers`, () => {

    it(`Should be minimum score`, () => {
      assert.equal(countScore(deepFunction(addAnswer, [`wrong`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `wrong`, `slow`, `wrong`], INITIAL_GAME).answers, 3), 350);
    });

    it(`Should be maximum score`, () => {
      assert.equal(countScore(deepFunction(addAnswer, [`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`], INITIAL_GAME).answers, 3), 1650);
    });

    it(`Should be 1000 score`, () => {
      assert.equal(countScore(deepFunction(addAnswer, [`wrong`, `correct`, `fast`, `fast`, `slow`, `fast`, `fast`, `slow`, `fast`, `wrong`], INITIAL_GAME).answers, 3), 1000);
    });

    it(`Should be -1 score, when no more lives`, () => {
      assert.equal(countScore(deepFunction(addAnswer, [`wrong`, `correct`, `fast`, `fast`, `slow`, `wrong`, `fast`, `slow`, `wrong`, `wrong`], INITIAL_GAME).answers, 3), -1
      );
      assert.equal(countScore(deepFunction(addAnswer, [`fast`, `correct`, `fast`, `fast`, `slow`, `correct`, `fast`, `slow`, `correct`, `wrong`], INITIAL_GAME).answers, 0), -1);
    });
  });
});
