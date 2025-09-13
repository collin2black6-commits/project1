function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const { describe, it, expect } = require('@jest/globals');

describe("shuffle", () => {
  it("should shuffle an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]);
    expect(shuffledArr).not.toEqual(arr);
    expect(shuffledArr.sort()).toEqual(arr.slice().sort());
  });

  it("should maintain the same array length", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]);
    expect(shuffledArr.length).toEqual(arr.length);
  });
});

module.exports = shuffle;