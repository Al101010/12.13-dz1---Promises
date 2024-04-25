import GameSaving from "./GameSaving";
import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        return read()
            .then((data) => json(data))
            .then((value) => JSON.parse(value))
            .then(({ id, created, userInfo }) => new GameSaving(id, created, userInfo));
    }
}