// employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// inquirer package
const inquirer = require("inquirer");

// file system
const fs = require('fs');

// generate html file path
const generateHtmlFilePath = './Documents/Homework/Homework08/TeamProfile.html';

// array of objects that holds team members
let teamMembers = [];

// inquirer
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: "managerName",
      type: "input",
      message: "enter manager's name",
    },
    {
      name: "managerID",
      type: "input",
      message: "enter manager's employee ID#",
    },
    {
      name: "managerEmail",
      type: "input",
      message: "enter manager's Email Address",
    },
    {
      name: "managerOfficeNumber",
      type: "input",
      message: "enter manager's Office #",
    },
    {
      name: "addTeamMembers",
      type: "list",
      message: "select team members to add",
      choices: ["Engineer", "Intern"]
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

function addEngineer() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        name: "engineerName",
        type: "input",
        message: "enter Engineer's name",
      },
      {
        name: "engineerID",
        type: "input",
        message: "enter Engineer's employee ID#",
      },
      {
        name: "engineerEmail",
        type: "input",
        message: "enter Engineer's Email Address",
      },
      {
        name: "engineerGithub",
        type: "input",
        message: "enter Engineer's Github Username",
      },
      {
        name: "addTeamMembers",
        type: "list",
        message: "select team members to add",
        choices: ["Engineer", "Intern", "Exit"]
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
function addIntern() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        name: "internName",
        type: "input",
        message: "enter intern's name",
      },
      {
        name: "internID",
        type: "input",
        message: "enter intern's employee ID#",
      },
      {
        name: "internEmail",
        type: "input",
        message: "enter intern's Email Address",
      },
      {
        name: "internSchool",
        type: "input",
        message: "enter intern's school",
      },
      {
        name: "addTeamMembers",
        type: "list",
        message: "select team members to add",
        choices: ["Engineer", "Intern", "Exit"]
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

function evaluteAddedTeamMember(result) {
  console.log(result)
  if (result === "Engineer") {
    // call engineer
    addEngineer();
  } else if (result === "Intern") {
    // call intern
    addIntern();
  } else {
    generateHtml();
  }
}

function generateInitialHTML() {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">s
  </head>
  
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <div class="container">
          <div class="row" id="team-cards"`;
}

function generateTeamMemberHtml(teamMember) {
  return `            <div>
  <div class="card">
      <div class="card-header">
          <h3>${teamMember.getName()}</h3>
          <h4>${teamMember.getRole()}</h4><i class="material-icons">content_paste</i>
      </div>

      <div class="card-body">
          <p class="id">ID: ${teamMember.getId()}</p>
          <p class="email">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p>
          ${teamMember.getRoleHtml()}
  </div>
</div>`;
}

function generateFinalHtml() {
  return `</div>

  </body>
  <script src="index.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  
  </html>`
}

// loop through team and generate html
function generateHtml() 
{
  // Use user feedback for... whatever!!
  fs.writeFileSync(generateHtmlFilePath, "");
  let htmlData = generateInitialHTML();
  for (var a in teamMembers) 
  {
    htmlData += generateTeamMemberHtml(teamMembers[a]);
  }
  htmlData += generateFinalHtml();
  fs.writeFileSync(generateHtmlFilePath, htmlData);
}
