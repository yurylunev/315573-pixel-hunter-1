import {assert} from "chai";
import {INITIAL_GAME} from "./game-data";
import {changeTime} from "./game-time";

describe(`Check time changer`, () => {

  it(`Should update time of the game`, () => {
    assert.equal(changeTime(INITIAL_GAME, 1).time, 1);
    assert.equal(changeTime(INITIAL_GAME, 10).time, 10);
    assert.throw(() => changeTime(INITIAL_GAME, 102).time, `Time should be less 30 sec`);
  });

  it(`Should not allow set negative values`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, -1).time, /Time should not be negative value/);
  });

  it(`Should not allow set non number value`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, []).time, /Time should be of type number/);
    assert.throws(() => changeTime(INITIAL_GAME, {}).time, /Time should be of type number/);
    assert.throws(() => changeTime(INITIAL_GAME, undefined).time, /Time should be of type number/);
    assert.throws(() => changeTime(INITIAL_GAME, null).time, /Time should be of type number/);
  });
});
