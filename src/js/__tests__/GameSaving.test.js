import GameSaving from "../GameSaving";

test('GameSaving.js', () => {
    const result = new GameSaving(1, 2, null);
    const expected = {id: 1, created: 2, userInfo: null}

    expect(result).toEqual(expected);
})
