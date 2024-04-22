#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgYellow.bold("*****Welcome to Easy Paisa Application*****"));
console.log(" ");
console.log("Application Password: 12345");
console.log(" ");

const completeHistory = [];
const start = await inquirer.prompt([
    {
        type: "password",
        name: "Password",
        message: "Enter Your Password, (Password will be Hidden)",
        mask: "*"
    }
]);
if (start.Password = 12345){
    console.log(chalk.greenBright.yellow.bold("*****Your Password is Correct ***** "));
    console.log(" ");

    let Balance = 50000;
    let running = true;
    while (running){
        const options = await inquirer.prompt([
            {
                type: "list",
                name: "input",
                message: "Select Your Options",
                choices: ["Check Balance", "Money Transfer", "Easy Load", "Bill Payment", "Exit"]
            }
        ]);
        if(options.input === "Check Balance"){
            console.log(chalk.green.italic("Your Current Balance is " + Balance));
            console.log(" ");
        }else if (options.input === "Money Transfer"){
            const transfer = await inquirer.prompt([
                {
                    type: "list",
                    name: "bankName",
                    message: "Select Bank Name",
                    choices: ["Askari Bank", "Allied Bank", "Bank AlHabib", "Bank Alfalah", "Bank Islami", "Dubai Islamic Bank", "HBL", "JS Bank", "Meezan Bank", "MCB", "NBP", "Standard Chartered Bank"]
                },
                {
                    type: "number",
                    name: "number",
                    message: "Enter Account Number"
                },
                {
                    type: "number",
                    name: "amount",
                    message: "Enter Amount to Transfer"
                }
            ]);
            if (transfer.amount > Balance){
                console.log(chalk.red.italic("Insufficient Balance"));
                console.log(" ");
            }else{
            Balance = Balance - transfer.amount;
            console.log(chalk.grey.italic(`${transfer.amount} Rupees Transfer to ${transfer.bankName} in Account Number ${transfer.number}`));
            console.log(chalk.green.italic("Your Remaining Balance is " + Balance));
            console.log(" ");}
        }else if (options.input === "Easy Load"){
            const load = await inquirer.prompt([
                {
                    type: "list",
                    name: "loadName",
                    message: "Select Carrier Name",
                    choices: ["Jazz Prepaid", "Jazz Postpaid", "Zong Prepaid", "Zong Postpaid", "Warid Prepaid", "Warid Postpaid", "Ufone Prepaid", "Ufone Postpaid", "Telenon Prepaid", "Telenon Postpaid",]
                },
                {
                    type: "input",
                    name: "number",
                    message: "Enter Number of Easy Load"
                },
                {
                    type: "number",
                    name: "amount",
                    message: "Enter Amount to Easy Load"
                }                
            ]);
            if (load.amount > Balance){
                console.log(chalk.red.italic("Insufficient Balance"));
                console.log(" ");
            }else{
                console.log(chalk.gray.italic(`${load.amount} Rupees Loaded to ${load.loadName} in Mobile Number ${load.number}`));
            }
            Balance = Balance - load.amount;
            console.log(chalk.green.italic("Your Current Balance is " + Balance))
        }else if (options.input === "Bill Payment"){
            const bill = await inquirer.prompt([
                {
                    type: "list",
                    name: "billName",
                    message: "Select Bill Name",
                    choices: ["Electricity", "Gas", "Water", "Internet"]
                },
                {
                    type: "input",
                    name: "number",
                    message: "Enter Number of Bill"
                },
                {
                    type: "number",
                    name: "amount",
                    message: "Enter Amount to Pay"
                }                
            ]);
            if (bill.amount > Balance){
                console.log(chalk.red.italic("Insufficient Balance"));
                console.log(" ");
            }else{
                console.log(chalk.gray.italic(`${bill.amount} Rupees Paid in ${bill.billName} Bill`));

                Balance = Balance - bill.amount;
                console.log(chalk.green.italic("Your Current Balance is " + Balance));
                console.log(" ");
            }
        }
        if (options.input === "Exit"){
            console.log(chalk.bgYellow.italic("Thanks for Using Easy Paisa Application"));
            running = false;
        }
    }
}else{
    console.log(chalk.green.italic("Invalid Password"));
}
