import inquirer from "inquirer";
import chalk from "chalk";
function sum(a: number, b: number) {
  console.log(chalk.blue.bgGreen(`The Answer is : ${a + b}`));
}
function sub(a: number, b: number) {
  console.log(chalk.black.bgWhite(`The Answer is : ${a - b}`));
}
function div(a: number, b: number) {
  console.log(chalk.blue.bgGreen(`The Answer is : ${a / b}`));
}
function mltiply(a: number, b: number) {
  console.log(chalk.black.bgWhite(`The Answer is : ${a * b}`));
}
let a = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Enter a number:",
  },
]);
let b = await inquirer.prompt([
  {
    name: "num2",
    type: "number",
    message: "Enter a number :",
  },
]);
console.log(chalk.yellowBright(`Choose anyone from following operators`));
console.log(chalk.yellowBright(`+,-,*,/`));
let c = await inquirer.prompt([
  {
    name: "operator",
    type: "string",
    message: "Enter an operator from above operators:",
  },
]);
if (c.operator == "+") {
  sum(a.num1, b.num2);
} else if (c.operator == "-") {
  sub(a.num1, b.num2);
} else if (c.operator == "*") {
  mltiply(a.num1, b.num2);
} else if (c.operator == "/") {
  div(a.num1, b.num2);
} else {
  console.log(chalk.bgRed(`Wrong input`));
}
