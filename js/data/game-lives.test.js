import {assert} from "chai";
import {INITIAL_GAME} from "./game-data";
import {changeLives} from "./game-lives";

describe(`Check lives changer`, () => {

  it(`Should update lives of the game`, () => {
    assert.equal(changeLives(INITIAL_GAME, 1).lives, 1);
    assert.equal(changeLives(INITIAL_GAME, 2).lives, 2);
    assert.equal(changeLives(INITIAL_GAME, 10).lives, 10);
    assert.equal(changeLives(INITIAL_GAME, 102).lives, 102);
  });

  it(`Should not allow set negative values`, () => {
    assert.throws(() => changeLives(INITIAL_GAME, -1).lives, /Lives should not be negative value/);
    assert.throws(() => changeLives(INITIAL_GAME, -10).lives, /Lives should not be negative value/);
    assert.throws(() => changeLives(INITIAL_GAME, -Infinity).lives, /Lives should not be negative value/);
  });

  it(`Should not allow set non number value`, () => {
    assert.throws(() => changeLives(INITIAL_GAME, []).lives, /Lives should be of type number/);
    assert.throws(() => changeLives(INITIAL_GAME, {}).lives, /Lives should be of type number/);
    assert.throws(() => changeLives(INITIAL_GAME, undefined).lives, /Lives should be of type number/);
    assert.throws(() => changeLives(INITIAL_GAME, null).lives, /Lives should be of type number/);
  });
});
