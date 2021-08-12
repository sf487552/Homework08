// employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// inquirer package
const inquirer = require("inquirer");

// file system
const fs = require('fs');
// const { checkPrime } = require('crypto');

// generate html file path
const generateHtmlFilePath = './Homework08/TeamProfile.html'

// array of objects that holds team members
let teamMembers = [];

// inquirer
inquirer
.prompt([
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
    message:"enter manager's Email Address",
  },
  {
    name:"managerOfficeNumber",
    type:"input",
    message:"enter manager's Office #",
  },
  {
    name: "addTeamMembers",
    type: "list",
    message: "select team members to add",
    choices: ["Engineer","Intern"]
  },
])
.then(answers => {
  // create manager
  let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
  // add to team members
  teamMembers.push(manager);
  evaluteAddedTeamMember(answers.addTeamMembers);
})
.catch(error => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

function addEngineer()
{
inquirer
.prompt([
  /* Pass your questions in here */
  {
    name:"engineerName",
    type:"input",
    message:"enter Engineer's name",
  },
  {
    name:"engineerID",
    type:"input",
    message:"enter Engineer's employee ID#",
  },
  {
    name:"engineerEmail",
    type:"input",
    message:"enter Engineer's Email Address",
  },
  {
    name:"engineerGithub",
    type:"input",
    message:"enter Engineer's Github Username",
  },
  {
    name: "addTeamMembers",
    type: "list",
    message: "select team members to add",
    choices: ["Engineer","Intern","Exit"]
  },
])
.then(answers => {
  // Use user feedback for... whatever!!
  let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
  // add to array
  teamMembers.push(Engineer);
  evaluteAddedTeamMember(answers.addTeamMembers)
})
.catch(error => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
}

// call this as many times as team members added
function addIntern()
{
inquirer
.prompt([
  /* Pass your questions in here */
  {
    name:"internName",
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
    message:"enter intern's Email Address",
  },
  {
    name:"internSchool",
    type:"input",
    message:"enter intern's school",
  },
  {
    name: "addTeamMembers",
    type: "list",
    message: "select team members to add",
    choices: ["Engineer","Intern","Exit"]
  },
])
.then(answers => {
  // Use user feedback for... whatever!!
  let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
  // add to array
  teamMembers.push(intern);
  // evaluate additions
  evaluteAddedTeamMember(answers.addTeamMembers)
})
.catch(error => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
}

function evaluteAddedTeamMember(result)
{
  if(result === "engineer")
  {
    // call engineer
    addEngineer();
  }else if(result === "intern")
  {
    // call intern
    addIntern();
  }else
  {
    generateHtml();
  }
}

// loop through team and generate html
function generateHtml()
{
  // Use user feedback for... whatever!!
  fs.writeFileSync(generateHtmlFilePath,"")
}
