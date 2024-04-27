import GameSavingLoader from "../GameSavingLoader";

test("should class GameSavingLoader.load()", () => {
    (async(done) => {
        const result = await GameSavingLoader.load();
    
        const expected = {
            id: 9,
            created: 1546300800,
            userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
        };
       
        expect(result).toEqual(expected);
        done();
    })();   
});  