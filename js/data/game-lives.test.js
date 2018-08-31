import {assert} from "chai";
import {INITIAL_GAME, repeatFunction} from "./game-data";
import {changeLives, decreaseLives, isDead} from "./game-lives";

describe(`Check manipulations with lives`, () => {

  it(`Should update lives of the game`, () => {
    assert.equal(changeLives(INITIAL_GAME, 1).lives, 1);
    assert.equal(changeLives(INITIAL_GAME, 10).lives, 10);
  });

  it(`Should not allow set negative values`, () => {
    assert.equal(changeLives(INITIAL_GAME, -1).lives, -1);
    assert.throw(() => changeLives(INITIAL_GAME, -10), /Lives should not be negative value/);
  });

  it(`Should not allow set non number value`, () => {
    assert.throws(() => changeLives(INITIAL_GAME, []).lives, /Lives should be of type number/);
    assert.throws(() => changeLives(INITIAL_GAME, {}).lives, /Lives should be of type number/);
    assert.throws(() => changeLives(INITIAL_GAME, undefined).lives, /Lives should be of type number/);
    assert.throws(() => changeLives(INITIAL_GAME, null).lives, /Lives should be of type number/);
  });

  it(`Should decrease lives, expect 2`, () => {
    assert.equal(decreaseLives(INITIAL_GAME).lives, 2);
  });

  it(`Should decrease lives, expect 1`, () => {
    assert.equal(repeatFunction(decreaseLives, 2, INITIAL_GAME).lives, 1);
  });

  it(`Should be false from isDead() function`, () => {
    assert.isFalse(isDead(repeatFunction(decreaseLives, 1, INITIAL_GAME)));
    assert.isFalse(isDead(repeatFunction(decreaseLives, 3, INITIAL_GAME)));
  });

  it(`Should be true from isDead() function`, () => {
    assert.isTrue(isDead(repeatFunction(decreaseLives, 4, INITIAL_GAME)));
    assert.isTrue(isDead(repeatFunction(decreaseLives, 5, INITIAL_GAME)));
  });
});
