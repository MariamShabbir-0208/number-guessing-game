#!/usr/bin/env node


import inquirer from "inquirer";
//1. computer will genrate a ramdam number

//2. user input for gusessing number

//3. compare user input with computer generate number & show result

const randomNumber = Math.floor(Math.random() * 10 +1);



const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",   
  },
]); 

 if (answer.userGuessedNumber === randomNumber){
     console.log("congtratulations! you guessed right number.");
 }
 else {
     console.log("you guess worng number.")

 }
  const number = Math.floor(Math.random() *6);
  console.log(number); 

