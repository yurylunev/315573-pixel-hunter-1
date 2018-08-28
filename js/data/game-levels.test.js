import {assert} from "chai";
import {INITIAL_GAME} from "./game-data";
import {changeLevel} from "./game-levels";

describe(`Check level changer`, () => {

  it(`Should update level of the game`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 2).level, 2);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
    assert.equal(changeLevel(INITIAL_GAME, 102).level, 102);
  });

  it(`Should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, /Level should not be negative value/);
    assert.throws(() => changeLevel(INITIAL_GAME, -10).level, /Level should not be negative value/);
    assert.throws(() => changeLevel(INITIAL_GAME, -Infinity).level, /Level should not be negative value/);
  });

  it(`Should not allow set non number value`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, []).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME, {}).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME, undefined).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME, null).level, /Level should be of type number/);
  });
});
