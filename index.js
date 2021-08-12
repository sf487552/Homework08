// employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// inquirer package
const inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
    name:"title",
    type:"input",
    message:"",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

// file system
const fs = require('fs');

// test code
let manager = new Manager("steve","31","email@email.com","role")

console.log(manager.getName());
console.log(manager.getID());
console.log(manager.getEmail());
console.log(manager.getRole());
console.log(manager.getOfficeNumber());

// asdfafhgj
