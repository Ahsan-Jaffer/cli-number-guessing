#! /usr/bin/env node
import inquirer from "inquirer";
// 01)  Computer will generate the Random number
const systemGeneratedNumber = Math.floor(Math.random() * 100);
// 02)  Take input Number from user
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please, guess a Number : "
    }
]);
const { userGuessNumber } = answer;
// 03) compare user input number
if (userGuessNumber === systemGeneratedNumber) {
    console.log("Congratulations! You have guessed the Number");
}
else {
    console.log("Sorry! You cannot guess the number.");
}
