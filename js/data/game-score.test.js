import {assert} from "chai";
import {countScore} from "./game-score";

describe(`Count score validator`, () => {

  it(`Less then 10 right answers `, () => {
    assert.equal(countScore([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 1), -1);
    assert.equal(countScore([10, 12, 20, 30, 9, 7, 25, 21, 10, -1], 2), -1);
    assert.equal(countScore([10, 12, -1, 30, 9, 7, 25, 21, 10, -1], 3), -1);
  });

  it(`10 right answers with average time`, () => {
    assert.equal(countScore([10, 12, 11, 13, 14, 17, 15, 18, 20, 16], 3), 1150);
    assert.equal(countScore([15, 15, 15, 15, 15, 15, 15, 15, 15, 15], 3), 1150);
    assert.equal(countScore([20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 3), 1150);
    assert.equal(countScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3), 1150);
  });

  it(`10 right fast answers`, () => {
    assert.equal(countScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 8], 1), 1550);
    assert.equal(countScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 8], 2), 1600);
    assert.equal(countScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 8], 3), 1650);
  });

  it(`10 right slow answers`, () => {
    assert.equal(countScore([21, 22, 23, 24, 25, 26, 27, 28, 29, 28], 1), 550);
    assert.equal(countScore([21, 22, 23, 24, 25, 26, 27, 28, 29, 28], 2), 600);
    assert.equal(countScore([21, 22, 23, 24, 25, 26, 27, 28, 29, 28], 3), 650);
  });
});
