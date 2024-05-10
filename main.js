#!/usr/bin/env node
//import the inquirer module, which is a commod line interface for node js.
import inquirer from "inquirer";
//Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:",
    },
]);
const words = answer.sentence.trim().split(" ");
// print the arry of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(` your sentence to count the word ${words.length}`);
