import {assert} from "chai";
import {addAnswer, countScore} from "./game-score";
import {INITIAL_GAME} from "./game-data";

describe(`Check count score`, () => {

  it(`Should be correct answers array when add new answer`, () => {
    assert.deepEqual(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `wrong`), `correct`), `fast`)
      .answers, [`wrong`, `correct`, `fast`]);
    assert.deepEqual(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `wrong`), `correct`), `fast`), `slow`), `correct`), `fast`), `slow`), `wrong`), `correct`), `correct`)
      .answers, [`wrong`, `correct`, `fast`, `slow`, `correct`, `fast`, `slow`, `wrong`, `correct`, `correct`]);
  });

  it(`Should not allow add incorrect answer value`, () => {
    assert.throws(() => addAnswer(addAnswer(addAnswer(INITIAL_GAME, `wrong`), `correct`), `fasts`), `Incorrect answer value`);
    assert.throws(() => addAnswer(addAnswer(addAnswer(INITIAL_GAME, ``), `correct`), `fast`), `Incorrect answer value`);
    assert.throws(() => addAnswer(addAnswer(addAnswer(INITIAL_GAME, null), `correct`), `fast`), `Incorrect answer value`);
    assert.throws(() => addAnswer(addAnswer(addAnswer(INITIAL_GAME, undefined), `correct`), `fast`), `Incorrect answer value`);
    assert.throws(() => addAnswer(addAnswer(addAnswer(INITIAL_GAME, []), `correct`), `fast`), `Incorrect answer value`);
  });

  describe(`Answers less then 10`, () => {
    it(`Should be -1`, () => {
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`).answers, 3), -1);
      assert.equal(countScore(addAnswer(INITIAL_GAME, `correct`).answers, 3), -1);
    });
  });

  describe(`10 correct answers`, () => {

    it(`Should be 1150`, () => {
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`), `correct`).answers, 3), 1150);
    });
  });

  describe(`Count score with any answers`, () => {

    it(`Should be minimum score`, () => {
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `wrong`), `slow`), `slow`), `slow`), `slow`), `slow`), `slow`), `wrong`), `slow`), `wrong`).answers, 3), 350);
    });

    it(`Should be maximum score`, () => {
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `fast`), `fast`), `fast`), `fast`), `fast`), `fast`), `fast`), `fast`), `fast`), `fast`).answers, 3), 1650);
    });

    it(`Should be 1000 score`, () => {
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `wrong`), `correct`), `fast`), `fast`), `slow`), `fast`), `fast`), `slow`), `fast`), `wrong`).answers, 3), 1000);
    });

    it(`Should be -1 score, when no more lives`, () => {
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `wrong`), `correct`), `fast`), `fast`), `slow`), `wrong`), `fast`), `slow`), `wrong`), `wrong`).answers, 3), -1);
      assert.equal(countScore(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(addAnswer(INITIAL_GAME, `fast`), `correct`), `fast`), `fast`), `slow`), `correct`), `fast`), `slow`), `correct`), `wrong`).answers, 0), -1);
    });
  });
});
