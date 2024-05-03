import GameSaving from "./GameSaving";
import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        return read()
        .then((data) => json(data))
        .then((value) => {
            const { id, created, userInfo } =  JSON.parse(value);
            return new GameSaving(id, created, userInfo)
        })
    }
}