import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load()
    .then(
        (saving) => console.log(saving),
        (error) => console.log(error)
    );

// GameSavingLoader.load().then(
//     (saving) => {
//         return saving;
//     },
//     (error) => {
//         return error;
//     }
// );