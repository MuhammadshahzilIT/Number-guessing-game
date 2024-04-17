"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const number = Math.floor(Math.random() * 5 + 1);
inquirer_1.default.prompt([
    {
        name: "random",
        type: "input",
        message: "Please guess a number between 1-5"
    }
])
    .then((answer) => {
    const guessedNumber = parseInt(answer.random);
    if (guessedNumber === number) {
        console.log(chalk_1.default.bgGreen("You guessed the correct number!"));
    }
    else {
        console.log(chalk_1.default.bgRed("Sorry, you guessed the wrong number."));
    }
});
