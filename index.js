#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//1. computer will genrate a ramdam number
//2. user input for gusessing number
//3. compare user input with computer generate number & show result
var randomNumber = Math.floor(Math.random() * 10 + 1);
var answer = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guess worng number.");
}
var number = Math.floor(Math.random() * 6);
console.log(number);
