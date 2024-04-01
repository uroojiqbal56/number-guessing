#! /usr/bin/env node
console.log("guess a number between 1 to 8");
//now variable creat
let a:number=Math.floor(Math.random()*7)
import inquirer from "inquirer";  
while(true){
    let input = await inquirer.prompt(
        {name: "guess" ,type:"number",
    message:"enter your guess number you want between 1 to 8"}
    )
//provide code 
let ans:number =input.guess 
if (a===ans)
{console.log("congratulation your guess number is correct")
break;}
else{console.log("sorry you guess wrong number try again")}




}