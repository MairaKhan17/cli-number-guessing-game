#!/usr/bin/env node 
import inquirer from "inquirer";
const randomNumbers = Math.floor(Math.random() * 15 + 1);
// user input for guessing no
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumbers) {
    console.log(" Hey! congratulations! you guessed the right number.");
}
else {
    console.log("you guessed a wrong number");
}
