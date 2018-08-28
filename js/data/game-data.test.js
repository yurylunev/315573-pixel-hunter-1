import {assert} from 'chai';
import {INITIAL_GAME} from "./game-data";

describe(`Game initial state`, () => {
  describe(`Level`, () => {
    it(`Should be number`, () => {
      assert.isNumber(INITIAL_GAME.level);
    });
  });
  describe(`Lives`, () => {
    it(`Should be number`, () => {
      assert.isNumber(INITIAL_GAME.lives);
    });
  });
  describe(`Time`, () => {
    it(`Should be number`, () => {
      assert.isNumber(INITIAL_GAME.time);
    });
  });
});
