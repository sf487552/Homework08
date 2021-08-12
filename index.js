// employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// inquirer package
const inquirer = require("inquirer");

// file system
const fs = require('fs');

// generate html file path
const generateHtml = './Homework08/TeamProfile.html'

// array of objects that holds team members
let teamMembers = [];



// test code
let manager = new Manager("steve","31","email@email.com","role")

console.log(manager.getName());
console.log(manager.getID());
console.log(manager.getEmail());
console.log(manager.getRole());
console.log(manager.getOfficeNumber());

// inquirer
inquirer.prompt([
  /* Pass your questions in here */
  {
  name:"managerName",
  type:"input",
  message:"enter manager's name",
  },
  {
    name:"managerID",
    type:"input",
    message:"enter manager's employee ID#",
  },
  {
    name:"managerEmail",
    type:"input",
    message:"enter manager,s Email Address",
  },
  {
    name:"managerOfficeNumber",
    type:"input",
    message:"enter manager's Office #",
  },
  {
    name: "AddTeamMembers",
    type: "list",
    message: "select team members to add",
    choices: ["Engineer","Intern"]
  },

])
.then((answers) => {
  // Use user feedback for... whatever!!
  fs.writeFileSync(generateHtml,"")
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});


// call this as many times as team members added
function addIntern()
{
  inquirer.prompt([
    /* Pass your questions in here */
    {
    name:"iternName",
    type:"input",
    message:"enter intern's name",
    },
    {
      name:"internID",
      type:"input",
      message:"enter intern's employee ID#",
    },
    {
      name:"internEmail",
      type:"input",
      message:"enter intern,s Email Address",
    },
    {
      name:"internSchool",
      type:"input",
      message:"enter intern's school",
    },
    {
      name: "AddTeamMembers",
      type: "list",
      message: "select team members to add",
      choices: ["Engineer","Intern","Exit"]
    },
  
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    // add to array
    teamMembers.push(intern);
    // evaluate additions
    if(answers.addTeamMember === "Engineer")
    {
      // call engineer
      addEngineer();
    }else if(answers.addTeamMember === "Intern")
    {
      // cakk intern
      addIntern();
    }else
    {
      generateHtml();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// loop through team and generate html
function generateHtml()
{

}
