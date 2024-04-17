import inquirer from "inquirer";
import chalk from "chalk";

const number: number = Math.floor(Math.random() * 5 + 1);

inquirer.prompt([
        {
            name: "random",
            type: "input",
            message: "Please guess a number between 1-5"
        }
        
    ])
    .then((answer: { random: string }) => {
        const guessedNumber: number = parseInt(answer.random);

        if (guessedNumber === number) {
            console.log(chalk.bgGreen("You guessed the correct number!"));
        } else {
            console.log(chalk.bgRed("Sorry, you guessed the wrong number."));
        }
    });