import GameSaving from "../GameSaving";
import GameSavingLoader from "../GameSavingLoader";

// test("should class GameSavingLoader", () => {
//     // const result = await GameSavingLoader.load();
//     (async() => {
//         const result = await GameSavingLoader.load();
    
//         // console.log(result);
//         const expected = {
//             id: 9,
//             created: 1546300800,
//             userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
//         };
       
//         expect(result).toEqual(expected);
//     })();   
// });    

test('GameSaving.js', () => {
    const result = new GameSaving(1, 2, null);
    const expected = {id: 1, created: 2, userInfo: null}

    expect(result).toEqual(expected);
})