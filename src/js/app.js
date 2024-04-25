import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load().then(
    (savingGame) => {
        return savingGame;
    },
    (error) => {
        return error;
    }
);