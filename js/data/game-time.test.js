import {assert} from "chai";
import {INITIAL_GAME, repeatFunction} from "./game-data";
import {changeTime, isTimeOff, tick, warningTime} from "./game-time";

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

  it(`Should be tick, expect 29`, () => {
    assert.equal(tick(changeTime(INITIAL_GAME, 30)).time, 29);
  });

  it(`Should be tick, expect 28`, () => {
    assert.equal(repeatFunction(tick, 20, changeTime(INITIAL_GAME, 30)).time, 10);
  });

  it(`Function warningTime should return true`, () => {
    assert.isTrue(warningTime(repeatFunction(tick, 2, changeTime(INITIAL_GAME, 7))));
  });

  it(`Function warningTime should return false`, () => {
    assert.isFalse(warningTime(tick(changeTime(INITIAL_GAME, 7))));
  });

  it(`Function isTimeOff should return true`, () => {
    assert.isTrue(isTimeOff(changeTime(INITIAL_GAME, 0)));
  });

  it(`Function isTimeOff should return false`, () => {
    assert.isFalse(isTimeOff(tick(changeTime(INITIAL_GAME, 7))));
  });

  it(`Function isTimeOff should return Error message`, () => {
    assert.throw(() => isTimeOff(tick(changeTime(INITIAL_GAME, 0))), `Time should not be negative value`);
  });
});
