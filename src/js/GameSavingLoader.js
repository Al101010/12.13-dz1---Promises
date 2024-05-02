import GameSaving from "./GameSaving";
import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        
        return read()
        .then((data) => json(data))
        .then((value) => Object.assign(new GameSaving(), JSON.parse(value)));

        // return read()
        //     .then((value) => {
        //         const { id, created, userInfo } =  JSON.parse(value);
        //         return new GameSaving(id, created, userInfo)
        //     })
        //     .catch((error) => {
        //         throw error;
        //     })
        
        }
}


// export default class GameSavingLoader {
//     static load() {
//         return read()
//             .then((data) => json(data))
//             .then((value) => JSON.parse(value))
//             .then(({ id, created, userInfo }) => new GameSaving(id, created, userInfo));
//     }
// }